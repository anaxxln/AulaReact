export default function Exercicio1({ fah })
{
    let cels = (Number(fah-32)) *5/9;
    return (

        <div>
            
            <p>a conversão de {fah}°F para Celsius é {cels} </p> 
            
        </div>
    )

}