# Logos de clientes — arraste os arquivos aqui

O componente `components/ui/ClientLogos.tsx` aponta para estes arquivos locais.
Baixe cada logo e salve com EXATAMENTE o nome abaixo, nesta pasta
(`public/images/clients/`). Assim o site usa o arquivo local, não o link externo.

**Só o logo do próprio grupo, nunca o da montadora.** Com o logo da marca (as
argolas da Audi, o letreiro da Royal Enfield sozinho) o visitante lê a montadora
como cliente, e a concessionária em geral não pode autorizar o uso da marca da
fábrica. Sem o logo do grupo, deixe o cliente sem `src` em `ClientLogos.tsx`: o
nome aparece em texto. Uso de marca de cliente só com autorização dele.

| Cliente | Salvar como | Origem |
|---|---|---|
| Audi Center Uberlândia | (sem arquivo: aparece em texto) | O `audi-center.png` desta pasta é o logo da Audi, não o do grupo: não use. Falta o logo próprio do Audi Center. |
| Euroville GWM | `euroville-gwm.webp` | https://production.autoforce.com/uploads/site/logo/2470/logo_webp_comprar-euroville-gwm_38fab49b34.png.webp |
| Euroville Royal Enfield | `euroville-royal-enfield.png` | https://www.eurovilleroyalenfield.com.br/wp-content/uploads/2025/10/logo-royal.png (texto branco: vai em chip escuro, `fundoEscuro: true`) |
| Attra Veículos | `attra.png` | https://attraveiculos.com.br/images/logo-black.png |
| Vamaq Motors | `vamaq.svg` | https://vamaqmotors.com.br/images/vamaq-logo-on-light.svg |
| TGV Empreendimentos | `tgv.png` | https://tgvempreendimentos.com.br/wp-content/uploads/2022/05/tgv-logo-nova.png |

Formatos aceitos: png, webp, svg. Se um nome/extensão mudar, ajuste em `ClientLogos.tsx`.
