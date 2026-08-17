#!/usr/bin/env bash
# Publica o próximo post do blog: pega a pauta seguinte no topic bank, gera via
# Gemini, valida e publica (ou marca rascunho se reprovar). Avisa no Slack nos
# dois desfechos — ver lib/slack.ts.
#
# Disparado por /etc/cron.d/dexi-blog-post. Log: /var/log/dexi-blog.log
#
# O script lê o .env.local pelo --env-file do próprio node, como documentado no
# cabeçalho dele. Não exportamos nada aqui para não haver duas fontes de env.
set -e
cd /root/dexidigital.com.br
export PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"

# O script importa .ts direto (lib/slack.ts etc.), o que exige Node com type
# stripping nativo (>= 22.18). Node velho falha com ERR_UNKNOWN_FILE_EXTENSION
# no meio da madrugada e ninguém entende por quê — melhor dizer na cara.
node_major=$(node -p 'process.versions.node.split(".")[0]')
node_minor=$(node -p 'process.versions.node.split(".")[1]')
if [[ "$node_major" -lt 22 || ( "$node_major" -eq 22 && "$node_minor" -lt 18 ) ]]; then
  echo "ERRO: node $(node -v) não roda .ts direto — precisa de >= 22.18." >&2
  exit 1
fi

echo "===== $(date -Iseconds) — blog-post start ====="
node --env-file=.env.local scripts/generate-blog-post.mjs
echo "===== $(date -Iseconds) — blog-post done ====="
