import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero'
import Servicos from './components/Servicos/Servicos'
import Equipe from './components/Equipe/Equipe'
import Agendamento from './components/Agendamento/Agendamento'
import Avaliacoes from './components/Avaliacoes/Avaliacoes'
import SobreNos from './components/SobreNos/SobreNos'
import Portfolio from './components/Portfolio/Portfolio.jsx'
import Localizacao from './components/Localizacao/Localizacao'
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
