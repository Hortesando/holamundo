// Importado de librerias, modulos y componentes
import React from 'react'
import ReactDom from 'react-dom'


/* crear componente, notas para la pagina

const App = () => {
    return <div></div>
}
function App() {
    return <div></div>
}

//renderizado de componente

ReactDom.render(
    <App/>,
    document.querySelector('#root')
)*/

class App extends React.Component{
    constructor() {
        super()
    }
        render () {
            return ( 
            <div>

                <h1>
                    Hola
                </h1>

                <h2>
                    Mundo
                </h2> 
            </div>
            )
        }
    
}
ReactDom.render(
    <App/>,
    document.querySelector('#root')
)