#!/usr/bin/env bash
# Instala/atualiza os wrappers e crontabs das rotinas automáticas da Dexi na VPS
# a partir das cópias versionadas neste repo. Idempotente — pode rodar quantas
# vezes quiser.
#
# Uso (na VPS, como root):
#   cd /root/dexidigital.com.br && bash deploy/cron/install-crons.sh
set -euo pipefail

SRC="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
JOBS=(dexi-blog-post)

if [[ "${EUID:-$(id -u)}" -ne 0 ]]; then
  echo "ERRO: rode como root — escreve em /usr/local/bin e /etc/cron.d." >&2
  exit 1
fi

echo "==> Wrappers -> /usr/local/bin (0755)"
for job in "${JOBS[@]}"; do
  install -m 0755 "$SRC/wrappers/$job.sh" "/usr/local/bin/$job.sh"
  echo "    /usr/local/bin/$job.sh"
done

echo "==> Crontabs -> /etc/cron.d (0644, root)"
for job in "${JOBS[@]}"; do
  # /etc/cron.d exige 0644, dono root e SEM indentação nas linhas.
  install -m 0644 -o root -g root "$SRC/cron.d/$job" "/etc/cron.d/$job"
  echo "    /etc/cron.d/$job"
done

# O cron costuma reler /etc/cron.d sozinho (via mtime); reload por garantia.
systemctl reload cron 2>/dev/null || systemctl reload crond 2>/dev/null || true

echo "==> Validação"
for job in "${JOBS[@]}"; do
  test -x "/usr/local/bin/$job.sh" || { echo "ERRO: /usr/local/bin/$job.sh não executável"; exit 1; }
  test -f "/etc/cron.d/$job"       || { echo "ERRO: /etc/cron.d/$job ausente"; exit 1; }
done

echo "==> Pré-requisitos do blog"
node -v
if ! grep -q '^SLACK_WEBHOOK_URL=https://hooks.slack.com' /root/dexidigital.com.br/.env.local 2>/dev/null; then
  echo "    AVISO: SLACK_WEBHOOK_URL ausente no .env.local — o post publica, mas ninguém é avisado."
else
  echo "    SLACK_WEBHOOK_URL presente."
fi

echo "OK — ${#JOBS[@]} wrapper(s) + ${#JOBS[@]} crontab(s) instalados e validados."
