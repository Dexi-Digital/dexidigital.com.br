#!/bin/bash

# Vercel Deployment Configuration Validator
# Este script valida se o projeto está pronto para deploy no Vercel

echo "🔍 Verificando Configurações do Projeto..."
echo ""

# Cores para output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Checklist
CHECKS_PASSED=0
CHECKS_TOTAL=0

# Função para verificar arquivo
check_file() {
    local file=$1
    local description=$2
    CHECKS_TOTAL=$((CHECKS_TOTAL + 1))
    
    if [ -f "$file" ]; then
        echo -e "${GREEN}✓${NC} $description"
        CHECKS_PASSED=$((CHECKS_PASSED + 1))
    else
        echo -e "${RED}✗${NC} $description"
    fi
}

# Função para verificar variável de ambiente
check_env() {
    local var=$1
    local description=$2
    CHECKS_TOTAL=$((CHECKS_TOTAL + 1))
    
    if grep -q "^${var}=" .env.local 2>/dev/null; then
        echo -e "${GREEN}✓${NC} $description configurada"
        CHECKS_PASSED=$((CHECKS_PASSED + 1))
    else
        echo -e "${RED}✗${NC} $description ${YELLOW}(não encontrada)${NC}"
    fi
}

echo "📦 Arquivos Críticos:"
check_file "package.json" "package.json"
check_file "next.config.ts" "next.config.ts"
check_file "tsconfig.json" "tsconfig.json"
check_file ".env.local" "Arquivo .env.local"
check_file "app/layout.tsx" "Layout principal"
check_file "app/page.tsx" "Página inicial"
echo ""

echo "🔐 Variáveis de Ambiente:"
check_env "NEXT_PUBLIC_SITE_URL" "NEXT_PUBLIC_SITE_URL"
check_env "RESEND_API_KEY" "RESEND_API_KEY"
check_env "EMAIL_FROM" "EMAIL_FROM"
check_env "INTERNAL_NOTIFICATION_EMAIL" "INTERNAL_NOTIFICATION_EMAIL"
echo ""

echo "📝 Configurações Next.js:"
CHECKS_TOTAL=$((CHECKS_TOTAL + 1))
if grep -q "reactStrictMode.*true" next.config.ts; then
    echo -e "${GREEN}✓${NC} React Strict Mode habilitado"
    CHECKS_PASSED=$((CHECKS_PASSED + 1))
else
    echo -e "${YELLOW}⚠${NC} React Strict Mode não configurado"
fi

CHECKS_TOTAL=$((CHECKS_TOTAL + 1))
if grep -q "images:" next.config.ts; then
    echo -e "${GREEN}✓${NC} Otimização de imagens configurada"
    CHECKS_PASSED=$((CHECKS_PASSED + 1))
else
    echo -e "${YELLOW}⚠${NC} Otimização de imagens não configurada"
fi

echo ""
echo "🧪 Build Test:"
CHECKS_TOTAL=$((CHECKS_TOTAL + 1))
if npm run build > /dev/null 2>&1; then
    echo -e "${GREEN}✓${NC} Build executado com sucesso"
    CHECKS_PASSED=$((CHECKS_PASSED + 1))
else
    echo -e "${RED}✗${NC} Build falhou ${YELLOW}(verifique erros acima)${NC}"
fi

echo ""
echo "════════════════════════════════════════════════════════════"
echo "📊 Resultado: $CHECKS_PASSED/$CHECKS_TOTAL verificações passou"
echo "════════════════════════════════════════════════════════════"
echo ""

if [ $CHECKS_PASSED -eq $CHECKS_TOTAL ]; then
    echo -e "${GREEN}✅ Projeto pronto para deploy no Vercel!${NC}"
    echo ""
    echo "Próximos passos:"
    echo "1. Ir para https://vercel.com/dashboard"
    echo "2. Selecionar o projeto"
    echo "3. Settings > Environment Variables"
    echo "4. Adicionar:"
    echo "   - RESEND_API_KEY"
    echo "   - EMAIL_FROM"
    echo "   - INTERNAL_NOTIFICATION_EMAIL"
    echo "   - NEXT_PUBLIC_SITE_URL"
    echo "5. Fazer um novo deploy"
    exit 0
else
    echo -e "${YELLOW}⚠️  Existem problemas a resolver antes do deploy${NC}"
    exit 1
fi
