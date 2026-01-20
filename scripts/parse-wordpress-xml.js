#!/usr/bin/env node
/**
 * WordPress XML Parser for Dexi Digital Blog Migration
 * Parses the WordPress export XML and extracts blog posts with SEO metadata
 */

const fs = require('fs');
const path = require('path');

// Read the XML file
const xmlPath = path.join(__dirname, '../_archive_vue_legacy/dexidigital.WordPress.2026-01-20.xml');
const xml = fs.readFileSync(xmlPath, 'utf-8');

// Helper to extract content between tags
function extractCDATA(content, tag) {
  const regex = new RegExp(`<${tag}><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${tag}>`, 'g');
  const match = regex.exec(content);
  return match ? match[1] : '';
}

function extractTag(content, tag) {
  const regex = new RegExp(`<${tag}><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${tag}>`, 'g');
  const match = regex.exec(content);
  if (match) return match[1];
  
  // Try without CDATA
  const regex2 = new RegExp(`<${tag}>([^<]*)</${tag}>`, 'g');
  const match2 = regex2.exec(content);
  return match2 ? match2[1] : '';
}

function extractMeta(content, metaKey) {
  const regex = new RegExp(`<wp:meta_key><!\\[CDATA\\[${metaKey}\\]\\]></wp:meta_key>\\s*<wp:meta_value><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></wp:meta_value>`, 'g');
  const match = regex.exec(content);
  return match ? match[1] : '';
}

// Split XML into items
const items = xml.split('<item>').slice(1);

// Filter only posts with status 'publish'
const posts = [];

for (const item of items) {
  const postType = extractTag(item, 'wp:post_type');
  const status = extractTag(item, 'wp:status');
  
  if (postType === 'post' && status === 'publish') {
    const title = extractCDATA(item, 'title');
    const slug = extractTag(item, 'wp:post_name');
    const pubDate = extractTag(item, 'wp:post_date');
    const excerpt = extractCDATA(item, 'excerpt:encoded');
    const content = extractCDATA(item, 'content:encoded');
    const postId = extractTag(item, 'wp:post_id');
    
    // Extract SEO metadata
    const seoScore = extractMeta(item, 'rank_math_seo_score');
    const focusKeyword = extractMeta(item, 'rank_math_focus_keyword');
    const readTime = extractMeta(item, '_yoast_wpseo_estimated-reading-time-minutes');
    const viewsCount = extractMeta(item, '_post_views_count');
    
    posts.push({
      id: postId,
      title,
      slug,
      date: pubDate,
      excerpt: excerpt.trim(),
      content,
      seoScore: seoScore || '0',
      focusKeyword: focusKeyword || '',
      readTime: readTime || '3',
      viewsCount: viewsCount || '0',
    });
  }
}

// Sort by SEO score (descending) then by views
posts.sort((a, b) => {
  const scoreDiff = parseInt(b.seoScore) - parseInt(a.seoScore);
  if (scoreDiff !== 0) return scoreDiff;
  return parseInt(b.viewsCount) - parseInt(a.viewsCount);
});

console.log('\n========================================');
console.log('WORDPRESS CONTENT AUDIT REPORT');
console.log('========================================\n');

console.log(`Total Blog Posts: ${posts.length}`);
console.log(`Posts with SEO Score >= 80: ${posts.filter(p => parseInt(p.seoScore) >= 80).length}`);
console.log(`Posts with SEO Score >= 90: ${posts.filter(p => parseInt(p.seoScore) >= 90).length}`);

console.log('\n--- TOP 50 POSTS BY SEO SCORE ---\n');

const top50 = posts.slice(0, 50);
top50.forEach((post, i) => {
  console.log(`${i + 1}. [SEO: ${post.seoScore}] ${post.title}`);
  console.log(`   Slug: ${post.slug}`);
  console.log(`   Date: ${post.date} | Views: ${post.viewsCount} | Read: ${post.readTime} min`);
  console.log(`   Keyword: ${post.focusKeyword || 'N/A'}`);
  console.log('');
});

// Save all posts to JSON for further processing
const outputPath = path.join(__dirname, '../_archive_vue_legacy/parsed-posts.json');
fs.writeFileSync(outputPath, JSON.stringify(posts, null, 2));
console.log(`\nFull data saved to: ${outputPath}`);
console.log(`Total posts exported: ${posts.length}`);

