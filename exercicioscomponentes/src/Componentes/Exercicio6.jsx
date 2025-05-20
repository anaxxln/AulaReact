export default function Exercicio6({quant, preco})
{
    let subtotal= number(quant)*number(preco);
    let desconto= (subtotal*10)/100;
    let valorf= subtotal-desconto
    return(
    <div>
        O valor do subtotal{subtotal} com o desconto de {desconto} tera um valor final de valor final de{valorf}
    </div>
    );
}