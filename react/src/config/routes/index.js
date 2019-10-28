import {
  Home, SignIn, SignUp, Login, Register, ShowMaze
} from "../../pages/index";


export const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
    redirectTo: '/sign_in'
  },
  {
    path: "/sign_in",
    component: SignIn,
    exact: true,
    onlyUnauthenticated: true,
    redirectTo: '/'
  },
  {
    path: "/sign_up",
    component: SignUp,
    exact: true,
    onlyUnauthenticated: true,
    redirectTo: '/register'
  },

  {
    path: "/register",
    component: Register,
    exact: true,
    onlyUnauthenticated: true,
    redirectTo: '/'
  },

  {
    path: "/login",
    component: Login,
    exact: true,
    onlyUnauthenticated: true,
    redirectTo: '/showMaze'
  },

  {
    path: "/showMaze",
    component: ShowMaze,
    exact: true,
    onlyUnauthenticated: true,
    redirectTo: '/'
  },
];