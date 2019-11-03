import {
    SignUp, Login, Register, Home, App, HomeUser
  } from "../../components/app/pages/index.js";
  
  
  export const routes = [
    {
        path: "/",
        component: HomeUser,
        exact: true,
        redirectTo: '/menu-maker'
    },

    {
      path: "/menu-maker",
      component: App,
      exact: true,
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
      redirectTo: '/menu-maker'
    },
  
    {
      path: "/menu-maker",
      component: Home,
      exact: true,
      onlyUnauthenticated: true,
      redirectTo: '/'
    },
  ];