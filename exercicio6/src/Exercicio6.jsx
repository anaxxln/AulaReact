export default function Exercicio6({quantidade, preco})
{
    let subtotal= (quantidade*preco);
    let desconto= (subtotal*10)/100;
    let valorf= subtotal-desconto
    return(
    <div>
        O valor do subtotal:{subtotal} <br/>
        com o desconto de:{desconto} <br/>
        tera um valor final de valor final de:{valorf} <br/>
    </div>
    );
}