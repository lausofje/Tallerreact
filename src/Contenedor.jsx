function Contenedor(props) {
    return (
      <div style={{ border: "3px solid pink" }}>
        {props.children}
        <h1>children props</h1>
      </div>
    );
  }
  export default Contenedor;