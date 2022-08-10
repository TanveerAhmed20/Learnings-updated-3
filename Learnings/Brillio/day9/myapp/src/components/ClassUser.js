import { Component } from "react";

class User extends Component{
    render(){
        let {name,city,technology,empId:id}  = this.props.details_object;

        return <p>Hello {name} city: {city} technology:{technology} employee id : {id}</p>
    }

}

export default User ; 