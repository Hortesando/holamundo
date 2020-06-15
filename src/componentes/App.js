import React from 'react'

class App extends React.Component{
    constructor() {
        super()
        this.state = {
            name: 'Sebastian',
            lastName: 'Ruiz'
        }
        this.changeHortensia = this.changeHortensia.bind (this)
        this.changeAngeles = this.changeAngeles.bind (this)
        this.changeEstela = this.changeEstela.bind (this)
    }
    changeHortensia(){
        this.setState ({name: 'Hortensia', lastName:'Sandoval' })
        
    }
    changeAngeles(){
        this.setState ({name: 'Angeles', lastName:'Sandoval' })
    }

    changeEstela(){
        this.setState ({name: 'Estela', lastName:'Martinez' })
    }   
        
        render () {
            return ( 
            <div>

                <h1>
                    Hola { this.state.name + ' ' + this.state.lastName }
                </h1>
                <button onClick = {this.changeHortensia}>Hortensia</button>
                <button onClick = {this.changeAngeles}>Angeles</button>
                <button onClick = {this.changeEstela}>Estela</button>
               
                
            </div>
            )
        }
    
}

export default App