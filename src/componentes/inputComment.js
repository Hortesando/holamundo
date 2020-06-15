import React from 'react'

import 

class inputComment extends React.Component {
    constructor(props) {
        super (props) {
            this.state = {
                comment:
            }
            this.handlertextArea = this.handlertextArea.bind (this),
        }
    }
    handlertextArea (event){
        console.log(event.target.value);
            this.setState({
                comment: event.target.value
            });
    }
render(){
    return (
        <form>
        <Form.Group controlId= "exampleForm.ControlTextarea1">
        <Form.Label> Example textarea </Form.Label>
        <Form.Control>
        as = "textarea"
        rows = 3
                onChange= {this.handlertextArea}
                value = { this.state.comment}

        </Form.Control>
        </Form.Group>
        
        </form>
    )
}
}

export default inputComment