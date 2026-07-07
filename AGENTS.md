# AGENTS.md - Kazanova Sob Medida

## Objetivo do projeto

Criar um site institucional em Astro para a Kazanova Sob Medida, marcenaria de moveis sob medida em Joinville, Santa Catarina, Brasil.

O site deve vender confianca, acabamento e atendimento local. A prioridade e gerar pedidos de orcamento pelo WhatsApp, mostrar projetos reais com fotos e videos, e ranquear bem para buscas locais relacionadas a moveis sob medida em Joinville e regiao.

## Informacoes da marca

- Nome: Kazanova Sob Medida
- Segmento: marcenaria e moveis sob medida
- Localizacao principal: Joinville, Santa Catarina, Brasil
- Regiao atendida: Joinville e regiao
- Proposta: ha 15 anos fazendo moveis na medida do sonho do cliente
- Diferenciais: fabricacao propria, projetos personalizados, condicoes de pagamento facilitadas, qualidade de acabamento
- Instagram: `@kazanova_sob_medida`
- Bio base: "Ha 15 anos fazendo moveis na medida do seu sonho. Condicoes de pagamentos facilitados. Joinville e regiao. Fabricacao propria."

## Stack obrigatoria

- Usar Astro.
- Usar HTML semantico, CSS modular e JavaScript apenas quando necessario.
- Preferir componentes `.astro` para secoes estaticas.
- Usar TypeScript quando houver scripts ou dados estruturados.
- Todo codigo criado para o projeto deve estar em portugues, incluindo nomes de componentes, variaveis, funcoes, arquivos locais, textos alternativos e comentarios.
- Excecoes aceitaveis: APIs do Astro, atributos HTML, nomes de pacotes, convencoes obrigatorias de bibliotecas e metadados tecnicos como `schema.org`.

## Diretrizes de arquitetura

Evitar codigo espaguete. Separar estrutura, dados, estilos e componentes.

Estrutura recomendada:

```txt
src/
  assets/
    imagens/
    videos/
  componentes/
    Cabecalho.astro
    Rodape.astro
    BotaoWhatsapp.astro
    GaleriaProjetos.astro
    CartaoAmbiente.astro
    SecaoHero.astro
    SecaoSobre.astro
    SecaoProcesso.astro
    SecaoContato.astro
  dados/
    ambientes.ts
    projetos.ts
    seo.ts
    empresa.ts
  layouts/
    LayoutPrincipal.astro
  paginas/
  pages/
    index.astro
    moveis-sob-medida-joinville.astro
    cozinhas-sob-medida-joinville.astro
    dormitorios-sob-medida-joinville.astro
    paineis-e-salas-sob-medida-joinville.astro
    contato.astro
  estilos/
    base.css
    variaveis.css
    utilitarios.css
```

Observacao: Astro exige a pasta `src/pages`. Se forem criadas pastas auxiliares em portugues, manter `pages` apenas para rotas.

## Assets disponiveis

Arquivos ja presentes no projeto:

- `assets/images/logo.png`: logo da Kazanova Sob Medida
- `assets/referencia.jpeg`: referencia visual de layout
- `assets/images/1.jpeg`: sala com painel/rack sob medida
- `assets/images/2.jpeg`: dormitorio com bancada, painel e espelho iluminado
- `assets/images/3.jpeg`: cabeceira de dormitorio sob medida
- `assets/images/4.jpeg`: dormitorio com armario espelhado e prateleiras
- `assets/videos/1.mp4`
- `assets/videos/2.mp4`
- `assets/videos/3.mp4`
- `assets/videos/4.mp4`

Ao iniciar o projeto Astro, mover ou copiar esses arquivos para `src/assets/` quando forem importados por componentes, ou para `public/` quando precisarem de URL direta. Preferir `src/assets` para imagens otimizadas pelo Astro.

## Direcao visual

Usar a referencia visual em `assets/referencia.jpeg` como direcao inicial, sem copiar tudo cegamente.

Direcao recomendada:

- Visual premium, limpo e funcional.
- Paleta com azul profundo, branco, tons de madeira natural e cinzas neutros.
- Evitar visual generico de template.
- Fotos reais dos moveis devem ser protagonistas.
- Videos podem ser usados em secao de bastidores, processo, fabricacao propria ou detalhes de acabamento.
- Usar cards apenas para itens repetidos, como ambientes, diferenciais e projetos.
- Nao colocar cards dentro de cards.
- Nao usar decoracoes abstratas excessivas, blobs, orbs ou gradientes pesados.
- Botoes principais devem ser claros: "Solicitar orcamento", "Falar no WhatsApp", "Ver projetos".

## Experiencia e responsividade

O site deve ser mobile-first.

Regras obrigatorias:

- Nao pode haver rolagem horizontal no mobile.
- Tamanho minimo de fonte de corpo: 16px.
- Areas clicaveis com pelo menos 44px de altura/largura.
- Menu mobile simples e acessivel.
- CTA de WhatsApp sempre facil de encontrar.
- Imagens e videos devem ter dimensoes reservadas para evitar layout shift.
- Respeitar `prefers-reduced-motion`.
- Manter contraste minimo adequado para leitura.
- Usar `alt` descritivo em todas as imagens relevantes.
- Videos devem ter `poster`, `muted`, `playsinline`, `controls` quando fizer sentido, e nunca bloquear o carregamento do conteudo principal.

## SEO local

O SEO deve ser otimizado para Joinville, Santa Catarina e moveis sob medida.

Palavras-chave principais:

- moveis sob medida Joinville
- moveis planejados Joinville
- marcenaria Joinville
- marceneiro em Joinville
- cozinha sob medida Joinville
- dormitorio sob medida Joinville
- painel de TV sob medida Joinville
- armarios sob medida Joinville
- moveis personalizados Joinville SC
- marcenaria sob medida em Joinville

Palavras-chave de apoio:

- fabricacao propria de moveis
- projeto de moveis personalizados
- moveis sob medida para apartamento
- moveis sob medida para casas
- acabamento em marcenaria
- orcamento de moveis sob medida
- Joinville e regiao

Cada pagina deve ter:

- Um unico `h1`.
- Title unico com ate cerca de 60 caracteres.
- Description unica com ate cerca de 155 caracteres.
- URL curta, legivel e com termo local quando fizer sentido.
- Conteudo em portugues brasileiro.
- Texto natural, sem repeticao artificial de palavras-chave.
- Links internos entre paginas de ambientes, projetos e contato.
- Imagem social `og:image` usando foto real ou composicao da marca.

Exemplos de metadados:

```ts
export const seoPaginaInicial = {
  titulo: "Moveis sob medida em Joinville | Kazanova Sob Medida",
  descricao:
    "Marcenaria em Joinville com fabricacao propria, projetos personalizados e moveis sob medida para cozinhas, dormitorios, salas e ambientes completos.",
};
```

## Dados estruturados

Adicionar JSON-LD nas paginas principais usando `LocalBusiness`, `HomeAndConstructionBusiness` ou tipo compativel do schema.org.

Incluir quando disponivel:

- `name`: Kazanova Sob Medida
- `description`: marcenaria especializada em moveis sob medida em Joinville e regiao
- `areaServed`: Joinville, Santa Catarina, Brasil
- `addressLocality`: Joinville
- `addressRegion`: SC
- `addressCountry`: BR
- `sameAs`: Instagram da empresa
- `telephone`: preencher somente se confirmado
- `url`: preencher quando dominio final existir

Nao inventar telefone, endereco fisico, CNPJ, horarios ou dominio. Se nao estiver confirmado, deixar como pendencia em `src/dados/empresa.ts`.

## Conteudo recomendado

Paginas/secoes prioritarias:

- Inicio com hero, promessa clara e CTA para orcamento.
- Sobre a Kazanova, destacando 15 anos, fabricacao propria e atendimento em Joinville.
- Ambientes: cozinhas, dormitorios, salas, paineis, escritorios, banheiros/lavanderias se houver fotos.
- Projetos com fotos reais e descricoes curtas.
- Processo: conversa inicial, medidas, projeto, fabricacao, instalacao e pos-entrega.
- Diferenciais: acabamento, materiais, pontualidade, personalizacao, pagamento facilitado.
- Contato com WhatsApp, Instagram e formulario simples se necessario.
- FAQ com duvidas sobre prazo, orcamento, pagamento, regiao atendida e manutencao.

Tom de voz:

- Profissional, direto e acolhedor.
- Valorizar sonho, medida exata, aproveitamento de espaco e acabamento.
- Evitar promessas absolutas como "o melhor de Joinville" sem prova.
- Preferir frases concretas: "fabricacao propria", "atendimento em Joinville e regiao", "projeto pensado para o seu espaco".

## Componentizacao

Cada secao grande deve ser um componente proprio.

Componentes nao devem conter listas fixas grandes quando os dados puderem ficar em `src/dados`.

Exemplo esperado:

```ts
export const ambientes = [
  {
    nome: "Cozinhas sob medida",
    slug: "cozinhas-sob-medida-joinville",
    resumo: "Funcionalidade, beleza e aproveitamento inteligente do espaco.",
    imagem: "cozinha-sob-medida-joinville.webp",
  },
];
```

Boas praticas:

- Um componente deve ter uma responsabilidade clara.
- Evitar repetir markup de botoes, cards e titulos de secao.
- Criar componentes pequenos para padroes recorrentes.
- Manter textos editaveis em arquivos de dados quando forem conteudo de negocio.
- Nao misturar regras globais com estilos especificos de componente.

## Performance

- Usar imagens em WebP ou AVIF quando possivel.
- Usar `astro:assets` para otimizar imagens.
- Definir `width`, `height`, `sizes` e carregamento apropriado.
- Imagem principal acima da dobra pode usar carregamento prioritario.
- Imagens abaixo da dobra devem usar lazy loading.
- Videos devem ser comprimidos para web.
- Evitar bibliotecas pesadas para interacoes simples.
- JavaScript no cliente deve ser minimo.
- Auditar Core Web Vitals antes de finalizar.

## Acessibilidade

- HTML semantico: `header`, `nav`, `main`, `section`, `article`, `footer`.
- Ordem de titulos correta.
- Links e botoes com nomes acessiveis.
- Foco visivel em elementos interativos.
- Formularios com `label` associado.
- Mensagens de erro claras quando houver formulario.
- Contraste adequado entre texto e fundo.
- Conteudo compreensivel sem depender apenas de cor.

## Conversao

O caminho principal do usuario deve ser pedir orcamento.

CTAs recomendados:

- "Solicitar orcamento"
- "Falar no WhatsApp"
- "Ver projetos"
- "Conhecer ambientes"

Regras:

- O primeiro CTA visivel deve levar para WhatsApp ou contato.
- Repetir CTA apos prova visual, diferenciais e FAQ.
- Usar mensagem pre-preenchida no WhatsApp quando o numero for confirmado.
- Nao criar formularios longos. Pedir apenas nome, telefone, ambiente desejado e mensagem.

## Qualidade antes de entregar

Antes de considerar a tarefa pronta:

- Rodar formatacao e lint se existirem.
- Rodar build do Astro.
- Testar mobile em largura aproximada de 375px.
- Verificar se nao ha rolagem horizontal.
- Verificar titles e descriptions.
- Verificar `alt` das imagens.
- Verificar links de WhatsApp, Instagram e rotas internas.
- Conferir se nao foram inventadas informacoes de contato.
- Conferir se o codigo continua modular e em portugues.

## Pendencias que precisam de confirmacao

- Telefone/WhatsApp oficial.
- E-mail oficial, se houver.
- Endereco fisico ou apenas area de atendimento.
- Dominio final do site.
- Horarios de atendimento.
- Cidades da regiao atendidas alem de Joinville.
- Se as imagens e videos atuais podem ser publicados no site final.

