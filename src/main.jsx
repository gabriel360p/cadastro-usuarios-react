import { StrictMode } from "react";
import { createRoot } from "react-dom/client";


import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";

//importando meu estilo global
import { GlobalStyle } from "./styles/GlobalStyle.js";

//se o nome do arquivo for index, eu não preciso escrever o nome dele na importação, só preciso indicar aonde ele esta
//import Home from "./pages/Home"; //export com default, eu faço assim pq eu to exportando uma coisa só
// import {App1, App2} from './App.jsx' // sem export com default, eu to exportando mais de uma coisa, então a gente precisa sinalizar que tem mais de uma coisa

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Injetando meus componentes e o CSS Global*/}

    <GlobalStyle />

    {/* Injetando meu roteamento */}
    <RouterProvider router={router} />


    {/* Como estou injetando o roteamento, e ele vai injetar os componentes conforme a rota, não preciso injetar os componentes manualmente */}
    {/* <Home /> */}
  </StrictMode>,
);
