export default function Exercicio3({valor, taxa, tempo})
{
    let parcela= valor + (valor*(taxa*taxa/100)*tempo);
    return (

        <div>

            <p>O valor da parcela é {parcela}</p>
            
        </div>
    )
}