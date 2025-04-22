export default function Exercicio2({ peso, altura })
{
    let imc= (Number(altura*altura)) /peso;
    return (

        <div>

            <p> Uma pessoa com {peso}kg e {altura}metros tem IMC de {imc} </p>
            
        </div>
    )

}