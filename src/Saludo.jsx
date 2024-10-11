const Saludo=({idioma,name})=>{
    if (idioma==="es") {
        return(
            <h1>
                hola {name},Bienvenida
            </h1>
        )
    }else if (idioma==="en") {
        return(
            <h1>
                hello {name},Welcome
            </h1>
        )
    } 
}
export default Saludo;