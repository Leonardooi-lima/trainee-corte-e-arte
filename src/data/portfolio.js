// Fonte local única das fotos do portfólio (T11), na ordem do Figma.
import social from "../assets/portfolio/social.webp";
import curvatura from "../assets/portfolio/curvatura.webp";
import tendencia from "../assets/portfolio/tendencia.webp";
import corporativo from "../assets/portfolio/corporativo.webp";
import versatilidade from "../assets/portfolio/versatilidade.webp";

export const PORTFOLIO = [
  { id: "social", titulo: "Social",
    descricao: "Dominamos o estilo social e clássico mantendo a herança histórica e executiva",
    negrito: "social e clássico",
    imagem: { src: social, alt: "Homem de barba ruiva longa, de perfil, enquanto o barbeiro finaliza o corte com tesoura e pente" } },
  { id: "curvatura", titulo: "Curvatura",
    descricao: "Maestria em todos os tipos de curvatura capilar",
    imagem: { src: curvatura, alt: "Menino de cabelo crespo olhando para a câmera enquanto o barbeiro ajusta o corte" } },
  { id: "tendencia", titulo: "Tendência",
    descricao: "Continuamente se atualizando nas tendências do momento",
    imagem: { src: tendencia, alt: "Homem de barba cheia e cabelo curto texturizado, de perfil, usando capa na barbearia" } },
  { id: "corporativo", titulo: "Corporativo",
    descricao: "Harmonia entre imagem profissional e estilo",
    imagem: { src: corporativo, alt: "Cliente de barba sorrindo enquanto o barbeiro aplica spray no cabelo penteado para trás" } },
  { id: "versatilidade", titulo: "Versatilidade",
    descricao: "Aperfeiçoamento total em disfarçados e tesouras",
    imagem: { src: versatilidade, alt: "Close de máquina com pente fazendo o degradê na lateral da cabeça" } },
];
