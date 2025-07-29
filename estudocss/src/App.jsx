import "./App.css";

export default function App()
{
    const estilo = {
        color : "aliceblue",
        textAlign: "center",
        backgroundColor: "rgb(85, 17, 149)",
        padding: "10px"
        };

    return (
        <div className="conteudo">
            <h1>Estudo CSS</h1>
            
            <p>
                O CSS (<i>Cascading Style Sheets</i>) é uma linguagem
                utlizada para estilizar as <b>paginas web</b>. Com ela
                podemos definir:
            </p>

            <ul>
                <li>Cores de fundo, do texto e dos elementos.</li>
                <li>Fontes e tamanho das letras</li>
                <li>Posicionamentos dos elementos na página</li>
                <li>Espaçamento, bordas, sombras, etc.</li>
                <li>Efeitos visuais e animações</li>
            </ul>

            <h3 style={estilo}>Cachorro sorridente</h3>
            <p className="centro">
                <img src="cachorro.webp"/>

            </p>
        </div>
    );
}