import { addClass, addId, div, i, nav, span } from '../builders';

export default function navbar() {
  const navLeft = addClass(div(), 'navbar-left');

  console.log("hola mundo")
  const cartIcon = addId(addClass(i(), 'fa', 'fa-sign-in'), 'cart-icon'); //Este es el boton para login
  const cartItems = addClass(span(), 'cart-items');
  const navbarItem = addClass(div(cartIcon, cartItems), 'navbar-item');
  const navRight = addClass(div(navbarItem), 'navbar-right', 'cart');

  const paraRetornar = addClass(nav(navLeft, navRight), 'navbar');
  console.log("en navbar", paraRetornar);
  return paraRetornar;
}
