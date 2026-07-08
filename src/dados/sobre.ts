import { empresa } from "./empresa";

export const sobreEmpresa = {
  chamada: "Sobre a Kazanova",
  titulo: "Projetos sob medida para dar vida ao seu estilo de morar.",
  descricao:
    "A Kazanova Sob Medida atua em Joinville e região criando móveis personalizados para quem busca aproveitar melhor o espaço sem abrir mão de acabamento, funcionalidade e atendimento próximo.",
  complemento:
    "Cada projeto parte da rotina do cliente: medidas, necessidades de uso, estilo do ambiente e detalhes que fazem diferença no dia a dia. Da conversa inicial à instalação, o foco é entregar móveis pensados para o seu espaço.",
  destaques: [
    {
      valor: `${empresa.anosExperiencia} anos`,
      rotulo: "fabricando móveis na medida do seu sonho",
    },
    {
      valor: "Fabricação própria",
      rotulo: "mais controle sobre acabamento e execução",
    },
    {
      valor: empresa.regiaoAtendida,
      rotulo: "Atendimento personalizado para projetos residenciais e corporativos",
    },
  ],
  diferenciais: [
    "Projetos personalizados para cada ambiente",
    "Aproveitamento inteligente de espaço",
    "Condições de pagamento facilitadas",
  ],
} as const;
