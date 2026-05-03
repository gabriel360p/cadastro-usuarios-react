import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//importando meu estilo global
import { GlobalStyle } from "./styles/GlobalStyle.js";


import Home from "./App.jsx"; //export com default, eu faço assim pq eu to exportando uma coisa só
// import {App1, App2} from './App.jsx' // sem export com default, eu to exportando mais de uma coisa, então a gente precisa sinalizar que tem mais de uma coisa

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Injetando meu css global */}
    <GlobalStyle />



    {/* Injetando meu componente */}
    <Home />
  </StrictMode>,
);
