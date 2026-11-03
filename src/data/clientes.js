import fotoFelipe from '../assets/avaliacoes/felipe.png'
import fotoLucas from '../assets/avaliacoes/lucas.png'
import fotoRafael from '../assets/avaliacoes/rafael.png'

// Para trocar uma foto, importe a nova imagem acima e altere apenas o campo foto.
export const clientes = {
  felipe: {
    nome: 'Felipe Almeida',
    foto: fotoFelipe,
    avaliacao:
      'Barbearia muito bem organizada, com um ambiente confortável e profissionais de qualidade. Atendimento excelente do início ao fim.',
  },
  lucas: {
    nome: 'Lucas Carvalho',
    foto: fotoLucas,
    avaliacao:
      'Ótima experiência! Fui muito bem atendido, o serviço foi rápido e o resultado ficou exatamente como eu queria. Recomendo!',
  },
  rafael: {
    nome: 'Rafael Martins',
    foto: fotoRafael,
    avaliacao:
      'Excelente atendimento! Ambiente muito agradável, profissionais atenciosos e um corte impecável. Com certeza voltarei mais vezes.',
  },
}

// Cada linha começa por um cliente diferente.
// A segunda metade de cada lista repete a primeira para manter a animação contínua.
export const clientesLinhaUm = [
  clientes.felipe,
  clientes.lucas,
  clientes.rafael,
  clientes.felipe,
  clientes.felipe,
  clientes.lucas,
  clientes.rafael,
  clientes.felipe,
]

export const clientesLinhaDois = [
  clientes.rafael,
  clientes.felipe,
  clientes.lucas,
  clientes.rafael,
  clientes.rafael,
  clientes.felipe,
  clientes.lucas,
  clientes.rafael,
]

export const clientesLinhaTres = [
  clientes.lucas,
  clientes.rafael,
  clientes.felipe,
  clientes.lucas,
  clientes.lucas,
  clientes.rafael,
  clientes.felipe,
  clientes.lucas,
]
