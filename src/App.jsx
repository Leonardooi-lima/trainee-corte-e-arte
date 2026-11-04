import Header from './components/Header/Header.jsx'
import Hero from './sections/Hero/Hero'
import Servicos from './sections/Servicos/Servicos'
import Equipe from './sections/Equipe/Equipe'
import Agendamento from './sections/Agendamento/Agendamento'
import Avaliacoes from './sections/Avaliacoes/Avaliacoes'
import SobreNos from './sections/sobre-nos/SobreNos'
import Portfolio from './sections/Portfolio/Portfolio.jsx'
import Localizacao from './sections/Localizacao/Localizacao'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Servicos />
        <Portfolio />
        <SobreNos />
        <Equipe />
        <Agendamento />
        <Avaliacoes />
        <Localizacao />
      </main>
      <Footer />
    </>
  )
}

export default App
