export default function Exercicio11 ({custo})
{
    let distribuidor = Number(custo) * 0.28 ; 
    let imposto = Number(custo) * 0.45 ; 
    let valorf = Number(distribuidor) + Number(imposto) + Number(custo);

    return(
    <div>
        O valor final é: {valorf}
    </div>
    );
}