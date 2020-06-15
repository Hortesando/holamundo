import React from 'react'
import Faker from 'faker'

import Comments from './comments'
import Button from './button'

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
                   <button class="ui primary button">
                        Comentar
                   </button>

               <Comments 
               
               userAvatar={Faker.image.avatar()}
               name={Faker.name.firstName()}              
               date= {Date.now ().toLocaleString()}
               comment= {Faker.lorem.paragraph()} 
               />
              
              
              
              

                
            </div>
            )
        }
    
}

export default App