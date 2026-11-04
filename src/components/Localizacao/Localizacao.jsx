import './Localizacao.css'
import whatsappIcon from '../../assets/whatsapp.png'
import localizacaoIcon from '../../assets/icones/localizacao.svg'
import enviarIcon from '../../assets/icones/enviar.svg'

const linkGoogleMaps = 'https://maps.app.goo.gl/EbViNBSvktiiSzL57'

export default function Localizacao() {
  return (
    <section id="localizacao" className="localizacao">
      <div className="localizacao-conteudo">
        <div className="localizacao-mapa">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1844.9536910671502!2d-49.02994277903394!3d-22.357125733989953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf5df043e9b513%3A0xebcba6aa545447fd!2sUbaiano!5e0!3m2!1spt-BR!2sbr!4v1793728192738!5m2!1spt-BR!2sbr"
            allowFullScreen
            loading="lazy"
            title="Localizacao da Corte & Arte"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>

        <a
          className="localizacao-botao"
          href={linkGoogleMaps}
          target="_blank"
          rel="noreferrer"
        >
          Como chegar
          <img src={enviarIcon} alt="" />
        </a>

        <div id="contato" className="localizacao-informacoes">
          <h2>- Onde estamos -</h2>
          <div className="localizacao-contato">
            <div className="localizacao-contato-item">
              <img
                className="localizacao-contato-icone"
                src={whatsappIcon}
                alt=""
              />
              <div>
                <h3>Telefone e WhatsApp</h3>
                <p>
                  <strong>Telefone:</strong> (14) 9XXXX-XXXX
                </p>
                <p>
                  <strong>WhatsApp:</strong> (14) 9XXXX-XXXX
                </p>
              </div>
            </div>

            <div className="localizacao-contato-item">
              <img
                className="localizacao-contato-icone"
                src={localizacaoIcon}
                alt=""
              />
              <div>
                <h3>Horário de funcionamento</h3>
                <p>
                  <strong>Segunda a sexta:</strong> 09h às 19h
                </p>
                <p>
                  <strong>Sábado:</strong> 09h às 18h
                </p>
                <p>
                  <strong>Domingos e feriados:</strong> Fechado
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
