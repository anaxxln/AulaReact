import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Paginas/Home";
import Bmw from "./Paginas/Bmw";
import Civic from "./Paginas/Civic";
import Gtr from "./Paginas/Gtr";
import Yamaha1 from "./Paginas/Yamaha1";
import Yamaha25 from "./Paginas/Yamaha25";
import "./App.css";

export default function App()
{
    return (
       <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/m4" element={<Bmw />} />
                <Route path="/civic" element={<Civic />} />
                <Route path="/gtr" element={<Gtr />} />
                <Route path="/Yamaha" element={<Yamaha1 />} />
                <Route path="/fz25" element={<Yamaha25 />} />

            </Routes>
       </BrowserRouter>
    );
}