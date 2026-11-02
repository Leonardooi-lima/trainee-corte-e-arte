// Monta o link de redirecionamento para o WhatsApp.
//
// Protótipo: não há um número fixo da barbearia. O telefone é opcional e
// pode ser configurado em um arquivo .env (veja .env.example):
//
//   VITE_WHATSAPP_TELEFONE=5514999999999   // DDI + DDD + número, só dígitos
//
// - Com telefone configurado: abre a conversa já com esse contato.
// - Sem telefone (padrão da demo): abre o WhatsApp com a mensagem pronta e
//   deixa a pessoa escolher o contato. Nenhum número é inventado.

const TELEFONE = (import.meta.env.VITE_WHATSAPP_TELEFONE || '').replace(
  /\D/g,
  '',
)

export const TEM_TELEFONE = TELEFONE.length > 0

export const MENSAGEM_PADRAO =
  'Olá! Vim pelo site e gostaria de agendar um horário na Corte & Arte.'

export function linkWhatsApp(mensagem = MENSAGEM_PADRAO) {
  const base = TELEFONE ? `https://wa.me/${TELEFONE}` : 'https://wa.me/'
  return `${base}?text=${encodeURIComponent(mensagem)}`
}
