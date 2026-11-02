import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero'
import Servicos from './components/Servicos/Servicos'
import Portfolio from './components/Portfolio/Portfolio'
import SobreNos from './components/SobreNos/SobreNos'
import Equipe from './components/Equipe/Equipe'

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
      </main>
    </>
  )
}

export default App
