// Fonte local única dos serviços (T08).
import cabeloMobile from "../assets/servicos/cabelo-mobile.webp";
import cabeloDesktop from "../assets/servicos/cabelo-desktop.webp";
import barbaMobile from "../assets/servicos/barba-mobile.webp";
import barbaDesktop from "../assets/servicos/barba-desktop.webp";
import sobrancelhaMobile from "../assets/servicos/sobrancelha-mobile.webp";
import sobrancelhaDesktop from "../assets/servicos/sobrancelha-desktop.webp";

export const SERVICOS = [
  { id: "cabelo", nome: "Cabelo",
    descricao: "O corte é uma arte com lavagem, finalização e penteado de acordo com a expectativa do cliente",
    preco: 40, duracaoMin: 40, adicional: false, icone: "tesoura",
    imagem: { mobile: cabeloMobile, desktop: cabeloDesktop,
      alt: "Barbeiro penteando e cortando o cabelo de um cliente visto de costas" } },
  { id: "barba", nome: "Barba",
    descricao: "Lavagem, massagem e alinhamento, transformamos a moldura do seu rosto",
    preco: 30, duracaoMin: 30, adicional: false, icone: "pincel",
    imagem: { mobile: barbaMobile, desktop: barbaDesktop,
      alt: "Barbeiro fazendo o alinhamento da barba de um cliente com navalha" } },
  { id: "sobrancelha", nome: "Sobrancelha",
    descricao: "Nós cuidamos de tudo: desenho, limpeza e um resultado natural que valoriza o olhar",
    preco: 5, duracaoMin: 10, adicional: true, icone: "navalha",
    imagem: { mobile: sobrancelhaMobile, desktop: sobrancelhaDesktop,
      alt: "Barbeiro aparando a sobrancelha de um cliente com tesoura" } },
];

export const formatarPreco = (valor, adicional) =>
  (adicional ? "+" : "") + "R$" + valor.toFixed(2).replace(".", ",");
export const formatarDuracao = (minutos, adicional) =>
  (adicional ? "+" : "") + minutos + " min";
