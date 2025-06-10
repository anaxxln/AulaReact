export default function Exercicio10 ({distancia, velocidade})
{
    let tempo= Number(distancia) / Number(velocidade);

    return(
    <div>
        O tempo foi de: {tempo}h
    </div>
    );
}