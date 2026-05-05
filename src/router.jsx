
import { createBrowserRouter } from "react-router-dom";

//importando minhas páginas para renderizar conforme a rota
import Home from "./pages/Home/index.jsx";
import ListUsers from "./pages/ListUsers/index.jsx";

//Criando as rotas da minha aplicação
const router = createBrowserRouter([
  {
    // esse caminho fica visível na barra de navegação do usuário
    path: "/",
    //essa é página que vai ser renderizada quando o usuário acessar a rota indicada no path
    element: <Home />,
  },    
  {
    path:"/users/list",
    element: <ListUsers />,
  },

]);
export default router;