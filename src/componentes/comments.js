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
                        <div className="date">2 days ago</div>
                        
                        
                </div>
                <div className="text">
                    Hey guys, I hope this example comment is helping you read this documentation.
                </div>
                </div>
            </div>
</div>
        )
    }
}
export default Comments