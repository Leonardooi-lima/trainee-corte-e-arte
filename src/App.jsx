import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero'
import Servicos from './components/Servicos'
import Equipe from './components/Equipe/Equipe'
import Avaliacoes from './components/Avaliacoes/Avaliacoes'
import SobreNos from './sections/sobre-nos/SobreNos'
import Portfolio from './components/Portfolio.jsx'

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
        <Avaliacoes />
      </main>
    </>
  )
}

export default App
