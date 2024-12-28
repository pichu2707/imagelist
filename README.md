# Utilización de API de pixabay con React
Hemos realizado una tarea para usar la **API de Pixabay** con React para hacer las peticiones de la API
y traer las imágenes. De esta manera hemos aprendido como utilizar las peticiones de aPI y además como poder
estos trabajos.

## ¿Cómo lo hemos creado?
Para la realización de esta tarea los trabajos que hemos creado han sido en Visual Studio Code, donde hemos realizado los comandos de ```npx create-react-app ListImage```
para ello tenemos el problema que al instalar React se nos hace la instalación con la versión 19.0.2 pero me da error al hacer el funcionamiento por lo que de manera manual tengo 
que introducir el 18.2.0 de manera manual en el [packaje.json].
Dentro del trabajo realizado hemos creado para la parte de CSS el enlace de CDN desde [Semantic](https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.5.0/semantic.min.css)
Cómo podemos ver tenemos el index.jx que es la parte que llamaríamos Home de nuestra apliación únicamente con un código básico:

```import React from "react";
import App from "./components/App";
import reactDom from 'react-dom';


reactDom.render(
    <App />,
    document.querySelector("#root")```