import { createBrowserRouter } from "react-router-dom";

//Importação dos arquivos das páginas
import {Logar} from "./Components/Logar/index";
import {Cadastro} from "./Components/Cadastrar/cadastro";
import {agenda} from "./Pages/Agenda/";
import {entrar} from "./Pages/Entrar/";
import {ficha} from "./Pages/Ficha/";
import {home} from "./Pages/Home/";
import {Across} from "./Pages/Horarios/";
import {Afitdance} from "./Pages/Horarios/";
import {Ajiujitsu} from ""


//Cria o router que será utilizado para navegar entre as rotas
const router = createBrowserRouter([
  {
    path: '/cadastro',
    element: <Cadastro/>
  },
  
])

export { router };