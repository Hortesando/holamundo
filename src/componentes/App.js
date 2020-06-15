import React from 'react'

class App extends React.Component{
    constructor() {
        super()
        this.state = {
            name: 'Sebastian',
            lastName: 'Ruiz'
        }
    }
        render () {
            return ( 
            <div>

                <h1>
                    Hola { this.state.name + ' ' + this.state.lastName }
                </h1>
                <button>Hortensia</button>
                <button>Estela</button>
                <button>Angeles</button>
            </div>
            )
        }
    
}

export default App