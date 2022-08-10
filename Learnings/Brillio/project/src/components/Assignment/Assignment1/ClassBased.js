import React from 'react'
import {Component} from 'react'

class Child extends Component{
  render(){
  const {name,dob,city}  = this.props;
  return (
    <div><h3>{name}-- {dob}--{city}</h3></div>
  )
  }
}
class Parent extends Component{
  render() {
    return (
        <div>
            <Child/>
            <Child name = "Bishwaraj Paul"/>
            <Child dob ="11-11-2022"/>
            <Child city ="mysore"/>
        </div>
    )
  }

}

Child.defaultProps = {
name : "default",
dob : "default",
city: "default"
}
export default Parent;