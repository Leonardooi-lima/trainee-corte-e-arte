import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero'
import Servicos from './components/Servicos'
import Equipe from './components/Equipe/Equipe'
import Avaliacoes from './components/Avaliacoes/Avaliacoes'
import SobreNos from './sections/sobre-nos/SobreNos'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Servicos />
        <SobreNos />
        <Equipe />
        <Avaliacoes />
      </main>
    </>
  )
}

export default App
