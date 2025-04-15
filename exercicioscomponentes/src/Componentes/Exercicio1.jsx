export default function Exercicio1({ fah })
{
    let cels = (Number(fah-32)) *5/9;
    return (

        <div>
            <h3>chamda para o exericio 1</h3>

            a conversão de 100°F para Celsius é {cels} 
            a conversão de 70°F para Celsius é {cels} 
        </div>
    )

}