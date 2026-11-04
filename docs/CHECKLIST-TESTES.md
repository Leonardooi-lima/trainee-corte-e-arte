# Checklist de testes — Corte & Arte

Roteiro de verificação manual dos fluxos do protótipo. Rode `npm run dev` e
percorra os itens no navegador. Marque `[x]` quando passar e anote qualquer
falha no fim, separando **impeditivas** (travam o uso) das **cosméticas**.

> Teste em duas larguras: **desktop** (≥ 1024px) e **mobile** (≤ 480px, use o
> device toolbar do DevTools). Vários componentes trocam de layout conforme a
> largura (hook `useEhDesktop`).

## 1. Layout geral (desktop e mobile)

- [ ] A página carrega sem erros no console (F12 → Console).
- [ ] Todas as seções aparecem na ordem: Início (Hero) → Serviços → Portfólio →
      Sobre nós → Equipe → Agendamento → Avaliações → Localização → Rodapé.
- [ ] Nenhum conteúdo estoura a largura da tela (sem scroll horizontal) no mobile.
- [ ] As imagens carregam (serviços, portfólio, hero, agendamento, sobre nós).

## 2. Navegação / redirecionamentos internos (âncoras)

- [ ] Os links do menu levam à seção certa: `#inicio`, `#servicos`,
      `#sobre-nos`, `#avaliacoes`, `#localizacao`/`#contato`, `#agendamento`.
- [ ] O botão "Agende já" do topo rola até a seção de agendamento.
- [ ] "Como chegar" (Localização) abre o Google Maps em nova aba.

## 3. Teclado e acessibilidade

- [ ] Dá para navegar por toda a página só com `Tab`, na ordem visual.
- [ ] O foco fica visível em links, botões e campos.
- [ ] Imagens decorativas não "poluem" a navegação (têm `alt=""`); imagens de
      conteúdo têm descrição.

## 4. Portfólio — carrossel

- [ ] As setas (‹ ›) avançam/voltam as fotos.
- [ ] No mobile, o arraste (swipe) troca a foto; soltar no meio não "trava".
- [ ] Com o carrossel focado, as setas ← → do teclado trocam a foto.

## 5. Portfólio — lightbox (modal de ampliação)

- [ ] Clicar/Enter numa foto abre o modal ampliado.
- [ ] **Todas as fotos abrem no mesmo tamanho** (ajuste recente — a primeira não
      deve ficar maior que as outras).
- [ ] `Esc` fecha o modal.
- [ ] Setas ← → do teclado trocam a foto dentro do modal.
- [ ] `Tab` circula apenas entre os controles do modal (não escapa para a página
      atrás — focus trap).
- [ ] Ao abrir o modal, a página de trás não rola (scroll travado).
- [ ] Ao fechar, o foco volta para a foto que estava aberta.

## 6. Agendamento — formulário

- [ ] Enviar vazio mostra mensagens de erro por campo (nome, telefone, serviço,
      profissional, data, horário).
- [ ] Telefone inválido (poucos dígitos) é barrado; válido (10–11 dígitos) passa.
- [ ] Não dá para escolher data passada (campo `min` = hoje).
- [ ] Horários que já passaram no dia de hoje aparecem desabilitados.
- [ ] Ao corrigir um campo com erro, a mensagem de erro some.
- [ ] Enviar válido mostra a **prévia** da solicitação com os dados preenchidos.
- [ ] A prévia exibe o aviso de que é **demonstrativa** (não é reserva real).

## 7. Agendamento — compartilhamento por WhatsApp

- [ ] Na prévia, "Compartilhar via WhatsApp" abre o WhatsApp (web/app) em nova
      aba com a mensagem já montada.
- [ ] **Sem** `VITE_WHATSAPP_NUMERO` configurado: abre sem destinatário (o
      usuário escolhe o contato). Nenhum número fixo.
- [ ] **Com** `VITE_WHATSAPP_NUMERO` no `.env`: abre a conversa com aquele número.
- [ ] "Copiar mensagem" copia o texto e mostra "Mensagem copiada!".
- [ ] "Editar informações" volta ao formulário com os dados preservados.

## 8. Localização — iframe do mapa

- [ ] O mapa do Google carrega dentro da seção.
- [ ] O mapa não empurra/estoura o layout no mobile.
- [ ] (Lembrete) Telefone e WhatsApp exibidos são **placeholders** do protótipo.

## 9. Avaliações e Equipe

- [ ] A seção de avaliações aparece e, se for interativa, responde ao clique/toque.
- [ ] A seção de equipe lista os profissionais corretamente.

## 10. Build de produção

- [ ] `npm run lint` passa sem erros.
- [ ] `npm run build` conclui sem erros.
- [ ] `npm run preview` serve o build e a página funciona igual ao `dev`.

---

## Falhas encontradas

### Impeditivas (precisam ser corrigidas antes de concluir)

- (nenhuma / descreva aqui)

### Cosméticas / melhorias (não travam)

- (descreva aqui)

## Critérios essenciais (definição de pronto)

- [ ] Fluxos desktop e mobile percorridos.
- [ ] Teclado, formulário, lightbox, carrossel, iframe e compartilhamento por
      WhatsApp verificados.
- [ ] Falhas impeditivas documentadas foram corrigidas.
