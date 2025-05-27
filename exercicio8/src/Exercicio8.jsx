export default function Exercicio8 ({altura, peso})
{
    let Imc= Number(peso)/(Number(altura)*Number(altura));
    return(
    <div>
        O seu IMC é de {Imc.toFixed(2)}
    </div>
    );
}

