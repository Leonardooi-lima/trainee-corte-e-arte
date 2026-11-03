import { useState } from 'react'
import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero'
import Servicos from './components/Servicos'
import Equipe from './components/Equipe/Equipe'
import Agendamento from './components/Agendamento/Agendamento'
import SobreNos from './sections/sobre-nos/SobreNos'

function App() {
  const [servicoSelecionado, setServicoSelecionado] = useState('')
  const [profissionalSelecionado, setProfissionalSelecionado] = useState('')

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Servicos onSelecionarServico={setServicoSelecionado} />
        <SobreNos />
        <Equipe onSelecionarProfissional={setProfissionalSelecionado} />
        <Agendamento
          servicoInicial={servicoSelecionado}
          profissionalInicial={profissionalSelecionado}
        />
      </main>
    </>
  )
}

export default App
