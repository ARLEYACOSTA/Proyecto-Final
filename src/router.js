/////////////DEFAULT//////////////
import { createWebHistory, createRouter } from "vue-router";
import Login from "./components/Default/Login.vue";
import Register from "./components/Default/Register.vue";
import Home from "./components/Default/Home.vue";
import NavBar from "./components/Default/NavBar.vue";
import NavBarPassword from "./components/Default/NavBarPassword.vue";
// import Recorrido from "./components/Default/Recorrido.vue";
import Prueba from "./components/Default/Prueba.vue";
import InicioTest from "./components/Default/InicioTest.vue";
import Test from "./components/Default/Test.vue";
import Document from "./components/Default/Document.vue";
import Pdf from "./components/Default/Pdf.vue";
import layout from "./components/Default/layout.vue";
import Aside from "./components/Default/Aside.vue";
import AsideComun from "./components/Default/AsideComun.vue";

// import EditProfile from "./components/EditProfile.vue";
// import Perfil from "./components/User/Perfil.vue";

/////////////USUARIO//////////////
import User from "./components/User/User.vue";
import Profile from "./components/User/Profile.vue";
import Inicio from "./components/User/Inicio.vue";
import ForgotPassword from "./components/User/ForgotPassword.vue";
import ResetPassword from "./components/User/ResetPassword.vue";
import NavBarUser from "./components/User/NavBarUser.vue";
import AsideUser from "./components/User/AsideUser.vue";
import Certificado from "./components/User/Certificado.vue";

/////////////ADMINISTRADOR//////////////
import Admin from "./components/Admin/Admin.vue";
import ProfileAdmin from "./components/Admin/ProfileAdmin.vue";
import AgregarPregunta from "./components/Admin/AgregarPregunta.vue";
import AgregarRespuesta from "./components/Admin/AgregarRespuesta.vue";
import NavBarAdmin from "./components/Admin/NavBarAdmin.vue";
import AsideAdmin from "./components/Admin/AsideAdmin.vue";
import InicioAdmin from "./components/Admin/InicioAdmin.vue";
import Usuarios from "./components/Admin/Usuarios.vue";
import SettingAdmin from "./components/Admin/SettingAdmin.vue";
import { LayoutPlugin } from "bootstrap-vue";

///////////////RECORRIDO///////////////////

import Recorrido from "/Recorrido.vue";

/////////////////////////////////////7777

const routes = [
  /////////////DEFAULT//////////////

  {
    path: "/",
    name: "Home",
    component:
      // NavBar: NavBar,
      Home,
  },

  {
    path: "/login",
    name: "Login",
    components: {
      default: Login,
      NavBar: NavBar,
    },
  },

  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/ForgotPassword",
    name: "ForgotPassword",
    components: {
      default: ForgotPassword,
      NavBar: NavBarPassword,
    },
  },

  {
    path: "/reset-password",
    name: "ResetPassword",
    components: {
      default: ResetPassword,
      NavBar: NavBar,
    },
  },
  /////////////RECORRIDO//////////////

  {
    path: "/Recorrido",
    name: "Recorrido",
    components: {
      default: Recorrido,
      // NavBar: NavBar,
    },
  },

  /////////////CERTIFICADO//////////////

  // {
  //   path: "/Certificado",
  //   name: "Certificado",
  //   components: {
  //     default: Certificado,
  //   },
  // },

  /////////////USUARIO//////////////
  {
    path: "/user",
    name: "User",
    components: {
      default: User,
      // NavBar: NavBarUser,
      // Aside: AsideUser,
    },
    children: [
      {
        path: "profile",
        component: Profile,
      },
      {
        path: "inicio",
        components: {
          default: Inicio,
          // NavBar: NavBarUser,
        },
      },
      
      {
        path: "Documentacion",
        components: {
          default: Document,
        },
      },

    ],
  },
  {
    path: "/prueba",
    name:"Prueba",
    components: {
      default:Prueba,
    },

    children:[
      {
        path:"test",
        component:Test,
      },
      {
        path:"comenzar",
        component:InicioTest,
      }
    ]
  },

  {
    path: "/certificado",
    name:"certificado",
    component: Certificado,
  },

  /////////////ADMINISTRADOR//////////////
  {
    path: "/admin",
    name: "Admin",
    components: {
      default: Admin,
      NavBar: NavBarAdmin,
      Aside: AsideAdmin,
    },
    children: [
      {
        path: "profileAdmin",
        component: ProfileAdmin,
      },

      {
        path: "agregar_pregunta",
        component: AgregarPregunta,
      },
      {
        path: "agregar_respuesta",
        component: AgregarRespuesta,
      },
      {
        path: "inicio",
        component: InicioAdmin,
      },
      {
        path: "Usuarios",
        component: Usuarios,
      },

      {
        path: "Setting",
        component: SettingAdmin,
      },
    ],
  },
  {
    path: "/layout",
    name: "layout",
    component: layout,
  },
];

const _router = createRouter({
  history: createWebHistory(),
  routes,
});

export default _router;
