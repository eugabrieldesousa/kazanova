import { empresa } from "./empresa";

export const sobreEmpresa = {
  chamada: "Sobre a Kazanova",
  titulo: "Marcenaria sob medida com olhar local e fabricacao propria.",
  descricao:
    "A Kazanova Sob Medida atua em Joinville e regiao criando moveis personalizados para quem busca aproveitar melhor o espaco sem abrir mao de acabamento, funcionalidade e atendimento proximo.",
  complemento:
    "Cada projeto parte da rotina do cliente: medidas, necessidades de uso, estilo do ambiente e detalhes que fazem diferenca no dia a dia. Da conversa inicial a instalacao, o foco e entregar moveis pensados para o seu espaco.",
  destaques: [
    {
      valor: `${empresa.anosExperiencia} anos`,
      rotulo: "fazendo moveis na medida do sonho do cliente",
    },
    {
      valor: "Fabricacao propria",
      rotulo: "mais controle sobre acabamento e execucao",
    },
    {
      valor: empresa.regiaoAtendida,
      rotulo: "atendimento proximo para projetos residenciais",
    },
  ],
  diferenciais: [
    "Projetos personalizados para cada ambiente",
    "Aproveitamento inteligente de espaco",
    "Condicoes de pagamento facilitadas",
  ],
} as const;
