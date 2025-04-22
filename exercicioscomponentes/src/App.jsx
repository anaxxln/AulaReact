import Exemplo1 from "./Componentes/Exemplo1"
import Exercicio1 from "./componentes/Exercicio1"
import Exercicio2 from "./Componentes/Exercicio2"
import Exercicio3 from "./Componentes/Exercicio3"

export default function App()
{
  return (
    <div>
      <h1>Exercícios de Componentes</h1>

      <h1>Exemplo 1</h1>
      <Exemplo1 numero1={10} numero2={5} />
      <Exemplo1 numero1={50} numero2={45.98} />

       <hr />
       <h1>Exercício 1</h1>
       <Exercicio1 fah="100" />
       <Exercicio1 fah="70" />
       
       <hr />
       <h1>Exercício 2</h1>
       <Exercicio2 peso="80" altura="1.80" />
       <Exercicio2 peso="60" altura="1.60" />

      <hr />
      <h1>Exercício 3</h1>
      <Exercicio3 valor={100} taxa={10} tempo={2} />
      <Exercicio3 valor={100} taxa={10} tempo={10} />


    </div>
  )
}




