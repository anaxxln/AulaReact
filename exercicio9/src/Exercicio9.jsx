export default function Exercicio9 ({capital, juros, tempo})
{
    let montante= Number(capital)* Math.pow(1 + Number(juros) / 100, Number(tempo));
    return(
    <div>
        O valor é de: {montante}
    </div>
    );
}
