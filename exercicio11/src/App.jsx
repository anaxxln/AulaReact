import Exercicio11 from "./exercicio11"

export default function app()
{
    return(
        <div>
            <h1>Exercicio 11</h1>
            <Exercicio11 distribuidor={400} imposto={50} custo={200}/>
        </div>
    );
}