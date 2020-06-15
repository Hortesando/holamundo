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

            </div>
            )
        }
    
}

export default App