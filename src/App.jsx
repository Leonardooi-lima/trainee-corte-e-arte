import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero'
import Servicos from './components/Servicos'
import Equipe from './components/Equipe/Equipe'
import Agendamento from './components/Agendamento/Agendamento'
import Avaliacoes from './components/Avaliacoes/Avaliacoes'
import SobreNos from './sections/sobre-nos/SobreNos'
import Portfolio from './components/Portfolio.jsx'
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
