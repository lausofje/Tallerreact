import "./index.css";
import Saludo from "./Saludo";
import Contenedor from "./Contenedor";
import Contador from "./Contador";

function App() {
  return (
    <>
      <h1>Taller de Conceptos Básicos de React</h1>
      <h2>
      1.¿Cuál es la diferencia entre un componente UI y un componente funcional en React?
      </h2>
      <h3> R/:la diferencia entre un componente UI y un componente funcional es que los componentes UI son elementos reutilizables, mientras que los componentes funcionales son funciones de JavaScript que muestran datos y vistas en el navegador.</h3>
      <h4>Ejercicio práctico:
Crea un componente funcional llamado Saludo que acepte un prop nombre y muestre un mensaje
de saludo.</h4>
      <Saludo  idioma="es" name="Laura"/>
      <h2>
      2.¿Qué son las props en React y cuál es su propósito principal?
      </h2>
      <h3> R/:Son datos que se pasan a un componente y que permiten la comunicación entre los componentes de una aplicación. Su propósito principal es permitir que los componentes reciban información para funcionar y definir los elementos de React que retornarán.</h3>
      <h4>Modifica el componente Saludo para que acepte un prop adicional idioma y muestre el saludo en el idioma especificado.</h4>
      <Saludo  idioma="en" name="Laura"/>
      <h2>
      3.¿Qué son los children props en React y por qué no se recomienda su uso excesivo?
      </h2>
      <h3> R/:Son una propiedad especial que permite pasar elementos secundarios a los componentes dentro de sus etiquetas de apertura y cierre.
      No se recomienda el uso excesivo de los children props en React porque no se pueden pasar tanto children como dangerouslySetInnerHTML al mismo tiempo</h3>
      <h4>Ejercicio práctico:
      Crea un componente Contenedor que utilice children props para envolver su contenido en un div
      con un borde.</h4>
      <Contenedor></Contenedor>
      <h2>
      4.¿Qué es useState en React y para qué se utiliza principalmente?
      </h2>
      <h3> R/:Son datos que se pasan a un componente y que permiten la comunicación entre los componentes de una aplicación. Su propósito principal es permitir que los componentes reciban información para funcionar y definir los elementos de React que retornarán.</h3>
      <h4>Modifica el componente Saludo para que acepte un prop adicional idioma y muestre el saludo en el idioma especificado.</h4>
      <h4>Ejercicio práctico:
      Crea un componente Contador que utilice useState para mantener y actualizar un contador.</h4>
      <Contador />
    </>

  );
}
export default App;