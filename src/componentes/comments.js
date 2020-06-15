import React from 'react'
import faker from 'faker'

class Comments extends React.Component{
        constructor() {
            super()
        }
    render () {
        return (
                        <div className="ui comments">
            <div classNameName="comment">
                <a className="avatar">
                    <img src= {faker.image.avatar()} alt = "Imagen de usuario"/>
                </a>
                <div className="content">
                <a className="author"> {faker.name.firstName ()} </a>
                <div className="metadata">
                        <div className="date"> {Date.now ().toLocaleString ()} </div>
                        
                        
                </div>
                <div className="text">
                    { faker.lorem.paragraph ()}
                </div>
                </div>
            </div>
</div>
        )
    }
}
export default Comments