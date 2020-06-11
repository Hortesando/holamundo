//importado de librerias, modulos y componentes
import React from 'react' 
import ReactDOM from 'react-dom'


// reacion de componentes
// Creacion de componentes funcionales
// const App = () => {
//      return <div></div> 
// }
// function App = () => {
//      return <div></div> 
// }

class App extends React.Component{
    constructor () {  
        super() 
             
    }
    render(){
        return (
            <div>
                <h1>
                    hola
                </h1>
                <h2>
                    mundo
                </h2>
            </div>
        )
    }
}
//Renderizado de componentes
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
    
)