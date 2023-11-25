import { createBrowserRouter } from "react-router-dom";

//Importação dos arquivos das páginas
//import { Entrar } from "./Pages/Entrar/entrar";
// import {Logar} from "./Components/Logar/index";
import { Cadastro } from "./Components/Cadastrar/cadastro";
//import { CadastroTreino } from "./Components/CadastrarTreino/cadastroTreino";
// import {Tabela} from "./Pages/Tabela/"
//import { Ficha } from "./Pages/Ficha/ficha";
// import {Home} from "./Pages/Home/";
import { Agenda } from "./Pages/Agenda/agenda";
// import {Across} from "./Pages/Horarios/";
// import {Afitdance} from "./Pages/Horarios/";
// import {Ajiujitsu} from "./Pages/Horarios/"
// import {Amuaythai} from "./Pages/Horarios/"
// import {Akickboxing} from "./Pages/Horarios/"
// import {Apilates} from "./Pages/Horarios/"
// import {Alocal} from "./Pages/Horarios/"
// import {Aparkour} from "./Pages/Horarios/"
// import {Perfil} from "./Pages/Perfil/"

//Cria o router que será utilizado para navegar entre as rotas
const router = createBrowserRouter([
  //{
  //  path: '/entrar',
  //  element: <Entrar />
  // },
  {
    path: '/cadastro',
    element: <Cadastro />
  },
  //{
  //   path: '/cadastroTreino',
  //   element: <CadastroTreino />
  //a },
  // {
  //   path: '/login',
  //   element: <Logar/>
  // },
  // {
  //   path: '/home',
  //   element: <Home/>
  // },

  {
    path: '/agenda',
    element: <Agenda />
  },
  // {
  //   path: '/Apilates',
  //   element: <Apilates/>
  // },
  // {
  //   path: '/Afitdance',
  //   element: <Afitdance/>
  // },
  // {
  //   path: '/Ajiujitsu',
  //   element: <Ajiujitsu/>
  // },
  // {
  //   path: '/Akickboxing',
  //   element: <Akickboxing/>
  // },

  // {
  //   path: '/Alocal',
  //   element: <Alocal/>
  // },

  // {
  //   path: '/Amuaythai',
  //   element: <Amuaythai/>
  // },

  // {
  //   path: '/Aparkour',
  //   element: <Aparkour/>
  // },

  // {
  //   path: '/Across',
  //   element: <Across/>
  // },
  // {
  //   path: '/tabela',
  //   element: <Tabela/>
  // },
  //{
  // path: '/ficha',
  //element: <Ficha/>
  //},
  {
    path: '/treinogluteo',
    element: <Cadastro />
  },
  {
    path: '/treinocostas',
    element: <Cadastro />
  },
  {
    path: '/treinoquads',
    element: <Cadastro />
  },
  //{
  // path: '/peito',
  // element: <Apeito/>
  // },
  // {
  //   path: '/perfil',
  //   element: <Perfil/>
  // },
])

export { router };