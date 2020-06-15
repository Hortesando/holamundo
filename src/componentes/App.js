import React from 'react'

class App extends React.Component{
    constructor() {
        super()
        this.state = {
            name: 'Sebastian',
            lastName: 'Ruiz'
        }
        this.changeState = this.changeState.bind (this)
        }

    changeState(objectName) {
        this.setState(objectName)        
    }
        
        render () {
            return ( 
            <div>

                <h1>
                    Hola { this.state.name + ' ' + this.state.lastName }
                </h1>
                <button onClick = {() => this.changeState ({name: 'Hortensia', lastName: 'Sandoval' })}>Hortensia</button>
                <button onClick = {() => this.changeState ({name: 'Sebastian', lastName: 'Ruiz' })}>Sebastian</button>
                <button onClick = {() => this.changeState ({name: 'Angeles', lastName: 'Sandoval' })}>Angeles</button>
               
                
            </div>
            )
        }
    
}

export default App