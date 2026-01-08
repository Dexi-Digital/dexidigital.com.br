#!/usr/bin/env node
/**
 * Image Optimization Script
 * Compresses and optimizes images in the public/images directory
 * 
 * Usage: node scripts/optimize-images.mjs
 */

import sharp from 'sharp';
import { readdir, stat, mkdir, copyFile } from 'fs/promises';
import { join, extname, basename, dirname } from 'path';

const PUBLIC_DIR = 'public/images';
const BACKUP_DIR = 'public/images-backup';
const MAX_WIDTH = 1920;
const QUALITY = {
  jpeg: 80,
  png: 80,
  webp: 80,
  avif: 65,
};

async function getAllImages(dir) {
  const images = [];
  const entries = await readdir(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      images.push(...await getAllImages(fullPath));
    } else {
      const ext = extname(entry.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
        images.push(fullPath);
      }
    }
  }
  
  return images;
}

async function getFileSize(path) {
  const stats = await stat(path);
  return stats.size;
}

function formatBytes(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

async function optimizeImage(imagePath) {
  const ext = extname(imagePath).toLowerCase();
  const originalSize = await getFileSize(imagePath);
  
  // Create backup directory if it doesn't exist
  const backupPath = imagePath.replace(PUBLIC_DIR, BACKUP_DIR);
  const backupDir = dirname(backupPath);
  await mkdir(backupDir, { recursive: true });
  await copyFile(imagePath, backupPath);
  
  try {
    let image = sharp(imagePath);
    const metadata = await image.metadata();
    
    // Resize if too large
    if (metadata.width && metadata.width > MAX_WIDTH) {
      image = image.resize(MAX_WIDTH, null, {
        withoutEnlargement: true,
        fit: 'inside',
      });
    }
    
    // Optimize based on format
    let outputBuffer;
    if (ext === '.jpg' || ext === '.jpeg') {
      outputBuffer = await image
        .jpeg({ quality: QUALITY.jpeg, progressive: true })
        .toBuffer();
    } else if (ext === '.png') {
      outputBuffer = await image
        .png({ quality: QUALITY.png, compressionLevel: 9 })
        .toBuffer();
    } else if (ext === '.webp') {
      outputBuffer = await image
        .webp({ quality: QUALITY.webp })
        .toBuffer();
    }
    
    if (outputBuffer) {
      await sharp(outputBuffer).toFile(imagePath);
      const newSize = await getFileSize(imagePath);
      const savings = originalSize - newSize;
      const savingsPercent = ((savings / originalSize) * 100).toFixed(1);
      
      return {
        path: imagePath,
        originalSize,
        newSize,
        savings,
        savingsPercent,
      };
    }
  } catch (error) {
    console.error(`Error optimizing ${imagePath}:`, error.message);
    // Restore from backup on error
    await copyFile(backupPath, imagePath);
    return null;
  }
  
  return null;
}

async function main() {
  console.log('🖼️  Image Optimization Script');
  console.log('============================\n');
  
  try {
    const images = await getAllImages(PUBLIC_DIR);
    console.log(`Found ${images.length} images to optimize\n`);
    
    let totalOriginal = 0;
    let totalNew = 0;
    let optimized = 0;
    
    for (const imagePath of images) {
      const result = await optimizeImage(imagePath);
      if (result) {
        optimized++;
        totalOriginal += result.originalSize;
        totalNew += result.newSize;
        
        console.log(`✅ ${basename(result.path)}`);
        console.log(`   ${formatBytes(result.originalSize)} → ${formatBytes(result.newSize)} (-${result.savingsPercent}%)\n`);
      }
    }
    
    const totalSavings = totalOriginal - totalNew;
    const totalSavingsPercent = totalOriginal > 0 
      ? ((totalSavings / totalOriginal) * 100).toFixed(1) 
      : 0;
    
    console.log('\n📊 Summary');
    console.log('----------');
    console.log(`Images optimized: ${optimized}/${images.length}`);
    console.log(`Original size: ${formatBytes(totalOriginal)}`);
    console.log(`New size: ${formatBytes(totalNew)}`);
    console.log(`Total savings: ${formatBytes(totalSavings)} (-${totalSavingsPercent}%)`);
    console.log(`\n💾 Backups saved to: ${BACKUP_DIR}`);
    
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();

