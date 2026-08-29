#!/usr/bin/env bash
# Radar de concorrência: lê os títulos publicados por Syonet, Followize e
# Motorleads, descarta o que a Dexi já cobriu e grava as lacunas como
# 'pending_review' no topic bank.
#
# NÃO publica nada e NÃO alimenta a fila do blog. Pauta de concorrente só entra
# na fila via curadoria humana — scripts/curar-pautas.mjs.
#
# Disparado por /etc/cron.d/dexi-radar. Log: /var/log/dexi-radar.log
set -e
cd /root/dexidigital.com.br
export PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"

# Mesmo requisito do wrapper do blog: importa .ts direto, precisa de type
# stripping nativo do Node.
node_major=$(node -p 'process.versions.node.split(".")[0]')
node_minor=$(node -p 'process.versions.node.split(".")[1]')
if [[ "$node_major" -lt 22 || ( "$node_major" -eq 22 && "$node_minor" -lt 18 ) ]]; then
  echo "ERRO: node $(node -v) não roda .ts direto — precisa de >= 22.18." >&2
  exit 1
fi

echo "===== $(date -Iseconds) — radar start ====="
node --env-file=.env.local scripts/radar-concorrencia.mjs --semear
echo "===== $(date -Iseconds) — radar done ====="
