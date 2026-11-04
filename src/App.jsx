import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero'
import Servicos from './components/Servicos'
import Equipe from './components/Equipe/Equipe'
import Agendamento from './components/Agendamento/Agendamento'
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
        <Agendamento />
      </main>
    </>
  )
}

export default App
