import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Paginas/Home";
import SaoPaulo from "./Paginas/SaoPaulo";
import RioJaneiro from "./Paginas/RioJaneiro";
import MinasGerais from "./Paginas/MinasGerais";
import EspiritoSanto from "./Paginas/EspiritoSanto";
import "./App.css";

import Parana from "./Paginas/Parana";
import SantaCatarina from "./Paginas/SantaCatarina";
import RioGrandeSul from "./Paginas/RioGrandeSul";

import DistritoFederal from "./Paginas/DistritoFederal";
import Goias from "./Paginas/Goias";
import MatoGrosso from "./Paginas/MatoGrosso";
import MatoGrossoSul from "./Paginas/MatoGrossoSul";

export default function App()
{
    return (
       <BrowserRouter>
            <Routes>
                <Route  path="/" element={<Home />} />
                <Route path="/sp" element={<SaoPaulo />} />
                <Route path="/rj" element={<RioJaneiro />} />
                <Route path="/mg" element={<MinasGerais />} />
                <Route path="/es" element={<EspiritoSanto />} />

                <Route path="/pr" element={<Parana />} />
                <Route path="/sc" element={<SantaCatarina />} />
                <Route path="/rs" element={<RioGrandeSul />} />

                <Route path="/df" element={<DistritoFederal />} />
                <Route path="/go" element={<Goias />} />
                <Route path="/mt" element={<MatoGrosso />} />
                <Route path="/ms" element={<MatoGrossoSul />} />

                <Route path="/al" element={<Alagoas />} />
                <Route path="/ba" element={<Bahia/>} />
                <Route path="/ce" element={<Ceara/>} />
                <Route path="/ma" element={<Maranhao/>} />
                <Route path="/pb" element={<Paraiba/>} />
                <Route path="/pe" element={<Pernambuco/>} />
                <Route path="/pi" element={<Piaui/>} />
                <Route path="/rn" element={<RioGrandeNorte/>} />
                <Route path="/se" element={<Sergipe/>} />


            </Routes>
       </BrowserRouter>
    );
}