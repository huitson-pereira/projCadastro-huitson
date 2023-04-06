import Agradecimento from './components/Agradecimento'
import DadosPessoaisForm from './components/DadosPessoaisForm'
import Endereco from './components/Endereco'
import { useForm } from './components/hooks/useForms'


function App() {
  const componentesFormulario = [<DadosPessoaisForm/>, <Endereco/>, <Agradecimento/>]
  const {passoAtual, componenteAtual, mudarPasso, ehUltimoPasso} = useForm(componentesFormulario)
  
  return (
    <div className="App">
      <header>
        <h2>Cadastre-se gratuitamente!</h2>
        <p>Faça o seu cadastro para ter acesso a todos os recursos da nossa plataforma</p>
      </header>
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
