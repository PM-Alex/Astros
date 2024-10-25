# React Router Dom v6

1. Instalar los módulos (paquetes) de React-Router-Dom en el proyecto de React
```sh
npm install react-router-dom 
````
2. En el archivo `main.jsx` debemos rear una constante `router` donde vive el componenten `createBrowserRpouter` y dentro las rutas espcíficas que el usuario debe seguir (en forma de un array de Objetos)

3. Importar `CreateBrowserRouter` desde `react-router-dom`

4. Crear la primera ruta dentro de la constante `router`, es decir, llenar el primer Object que recibe un par key-value referentes al path (ruta) y el componennte al que apunta (element)

```Javascript
const router = createBrowserRouter[

  {
    path: `/`, element: <App />
  }

]
```
5. Para indicar donde se renderiza react-router debemos sustituir el componenete `<App />` que se encuentrea dentro de `React.<StrictMode>' y en su lugar, agregar el componente `<RouterProvider />` el cual va a recibir el conjunto [array] de rutas a renderizar