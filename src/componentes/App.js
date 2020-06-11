import React from 'react'

import Button from './button'

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
                < Button />
                
            </div>
        )
    }
}

export default App