function text(words) {
  return document.createTextNode(words);
}

function createElement(type, ...children) {
  const newElement = document.createElement(type);
  //console.log("NEW ELEMENT", newElement)
  children.forEach(child => newElement.appendChild(child));
  //console.log("new element dps", newElement)
  return newElement;
}

function div(...children) {
  return createElement('div', ...children);
}

function article(...children) {
  return createElement('article', ...children);
}

function h1(...children) {
  return createElement('h1', ...children);
}

function h3(...children) {
  return createElement('h3', ...children);
}

function nav(...children) {
  return createElement('nav', ...children);
}

function ul(...children) {
  return createElement('ul', ...children);
}

function li(...children) {
  return createElement('li', ...children);
}

function i(...children) {
  return createElement('i', ...children);
}

function span(...children) {
  return createElement('span', ...children);
}

function section(...children) {
  return createElement('section', ...children);
}

function footer(...children) {
  return createElement('footer', ...children);
}

function p(...children) {
  return createElement('p', ...children);
}

function img(source) {
  const image = createElement('img');
  image.src = source;
  return image;
}

function button(...children) {
  return createElement('button', ...children);
}

function input(placeholder, ...children) {
  const input = createElement('input', ...children);
  input.type = "text";
  input.placeholder = placeholder;
  return input;
}

function password(...children) {
  const input = createElement('input', ...children);
  input.type = "password";
  input.placeholder = "Contraseña";
  return input;
}

function addId(element, id) {
  const newElement = element.cloneNode(true);
  return Object.assign(newElement, { id });
}

function addClass(element, ...klasses) {
  const newElement = element.cloneNode(true);
  klasses.forEach(klass => newElement.classList.add(klass));
  return newElement;
}
