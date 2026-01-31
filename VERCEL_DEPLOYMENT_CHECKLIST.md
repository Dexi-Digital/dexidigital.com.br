# ✅ Checklist de Configuração para Deploy no Vercel

## 🚨 PROBLEMA ATUAL
Seu site está sendo publicado, mas não carrega. Isso geralmente significa que:
1. Build passou ✅ (confirmado)
2. Runtime está quebrando ❌ (provavelmente variáveis de ambiente)

## 📋 O Que Fazer Agora

### 1️⃣ Configurar Variáveis de Ambiente no Vercel
**Acesse:** https://vercel.com/dashboard → Seu projeto → Settings → Environment Variables

**Adicione exatamente estas variáveis:**

```
RESEND_API_KEY = re_ffTXuc4o_D6TMVtBG7mrM28g8Ev4KB4uE
EMAIL_FROM = Dexi Digital <contato@dexidigital.com.br>
INTERNAL_NOTIFICATION_EMAIL = contato@dexidigital.com.br
NEXT_PUBLIC_SITE_URL = https://dexidigital.com.br
```

⚠️ **IMPORTANTE:**
- Variáveis que começam com `NEXT_PUBLIC_` ficam visíveis no cliente (está OK, são públicas)
- Variáveis sem `NEXT_PUBLIC_` ficam apenas no servidor (sensíveis)
- Redefaça o deploy após adicionar as variáveis

### 2️⃣ Se usar Supabase (Opcional)
Se planeja usar o Supabase, adicione também:
```
NEXT_PUBLIC_SUPABASE_URL = sua-url-aqui.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY = sua-chave-aqui
SUPABASE_SERVICE_ROLE_KEY = sua-service-key-aqui (opcional, apenas se usar server-side)
```

### 3️⃣ Verificar Build Localmente
O build localmente funciona:
```bash
npm run build
npm start
```

### 4️⃣ Debugar no Vercel
Após deploy, verifique:
1. **Logs do Vercel:** Projeto → Deployments → Último → Logs
2. **Procure por erros** como:
   - `Cannot find module`
   - `process.env.XXX is undefined`
   - Erros de API

### 5️⃣ Problemas Comuns

| Problema | Solução |
|----------|---------|
| Site em branco | Environment variables não setadas |
| 500 Error | Erro no servidor (check logs do Vercel) |
| Imagens não carregam | Verificar URLs em `next.config.ts` |
| API retorna erro | Chaves de API inválidas ou não encontradas |

## 🔍 Checklist Final

- [ ] Variáveis de ambiente adicionadas no Vercel
- [ ] Deploy redone (redeployment) após adicionar variáveis
- [ ] Logs do Vercel verificados (sem erros de env variables)
- [ ] Site carrega em https://dexidigital.com.br
- [ ] Página inicial renderiza corretamente
- [ ] Clique em botões (whatsapp, etc) funciona

## 📞 Se Ainda Não Funcionar

1. Verifique os **Logs Completos** no Vercel
2. Execute localmente: `npm run dev`
3. Compare as variáveis locais com as do Vercel

---

**Atualizado:** 31 Jan 2026
**Status:** Build funcional, runtime precisa de variáveis de ambiente
