import Agradecimento from './components/Agradecimento'
import DadosPessoaisForm from './components/DadosPessoaisForm'
import Endereco from './components/Endereco'
import { useForm } from './components/hooks/useForms'


function App() {
  const componentesFormulario = [<DadosPessoaisForm/>, <Endereco/>, <Agradecimento/>]
  const {passoAtual, componenteAtual, mudarPasso, ehUltimoPasso} = useForm(componentesFormulario)
  
  return (
    <div className="App">
      <div>
            <form>
                {/*aqui vai a regra para exibir o componente do passo atual*/}
                <div>
                  {componenteAtual}
                </div>
            </form>
      </div>
    </div>
  )
}

export default App
