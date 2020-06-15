import React from 'react'

import Comments from './comments'

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
                   
               <Comments></Comments>
               <Comments></Comments>
               <Comments></Comments>
              
              

                
            </div>
            )
        }
    
}

export default App