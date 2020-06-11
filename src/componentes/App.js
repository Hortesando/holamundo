import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
    constructor () {  
        super()
        this.state = {
            name: 'Hortensia',
            lastName:'Sandoval Gonzalez' 
            }      
    this.ChangeState = this.ChangeState.bind (this)
        }
        ChangeState(){
            this.setState({name: 'Esther' + lastName: 'Gonzalez'})
        }
    render(){
        return (
            <div>
                <h1>
                    hola { this.state.name + ' ' + this.state.lastName}
                </h1>
                <h2>
                    mundo
                </h2>
            </div>
        )
    }
}

export default App