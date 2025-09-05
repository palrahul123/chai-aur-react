const mainContainer = document.getElementById("root");

function CustomRenderElement(reactElement, container) {
  /*
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);
  container.appendChild(domElement);
  */

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}

const ReactElement = {
  type: "a",
  props: {
    href: "www.google.com",
    target: "_blank",
  },
  children: "Click me ",
};

CustomRenderElement(ReactElement, mainContainer);
