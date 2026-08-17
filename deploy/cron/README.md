# Kit de cron — publicação automática do blog (VPS)

Fonte da verdade versionada do cron que roda na VPS (`dexi-vps`, app em
`/root/dexidigital.com.br`). O estado desejado vive aqui e o `install-crons.sh`
o aplica — wrapper e crontab não devem ser editados direto na VPS, senão a
próxima pessoa não sabe o que está no ar.

## Conteúdo

```
deploy/cron/
  wrappers/
    dexi-blog-post.sh    # node --env-file=.env.local scripts/generate-blog-post.mjs
  cron.d/
    dexi-blog-post       # 09:00 todo dia, horário de Brasília
  install-crons.sh       # copia, valida e recarrega o cron
```

## Instalar

```bash
ssh dexi-vps
cd /root/dexidigital.com.br && git pull --ff-only origin master
bash deploy/cron/install-crons.sh
```

Idempotente: rode de novo a cada deploy que mexa no cron.

## O que a rotina faz

Uma execução = **um post**. O script pega a próxima pauta do topic bank
(`data/topic-bank.db`), deduplica contra o que já foi publicado, gera via Gemini,
valida e publica em `data/blog-posts.db` — ou marca como rascunho se a validação
reprovar. Nos dois desfechos avisa no Slack (`lib/slack.ts`).

Como cada execução consome uma pauta, **a cadência é a taxa de publicação**: em
09:00 diário, um backlog de 30 pautas dura um mês. Quando o banco esvazia o
script não quebra — sai sem publicar.

## Pré-requisitos na VPS

| item | por quê |
|---|---|
| `SLACK_WEBHOOK_URL` no `.env.local` | sem ela o post publica e ninguém fica sabendo; `lib/slack.ts` só registra um aviso no log |
| Node >= 22.18 | o script importa `.ts` direto (`lib/slack.ts`, `lib/gemini.ts`), o que exige type stripping nativo. O wrapper checa e falha com mensagem clara em vez de `ERR_UNKNOWN_FILE_EXTENSION` às 9h |
| `data/` populado | os bancos SQLite são gitignored e vivem só na VPS |

> **Fuso:** a VPS roda em `Europe/Berlin`. O crontab declara
> `CRON_TZ=America/Sao_Paulo`, então o `9` é 09:00 de Brasília — sem isso o post
> sairia às 4h da manhã. Ao editar o horário, lembre que ele é lido nesse fuso.

## Log

```
/var/log/dexi-blog.log
```

Cada execução escreve um par `start` / `done` com timestamp ISO. Sem `done` no
par = a rodada morreu no meio, e o Slack deve ter recebido o aviso de falha.

## Desligar temporariamente

```bash
rm /etc/cron.d/dexi-blog-post     # volta rodando install-crons.sh
```
