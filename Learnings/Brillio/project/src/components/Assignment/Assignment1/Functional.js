import React from 'react'

const Child = (props) => {
  const {name,dob,city } = props;
  return (
    <div><h3>{name}-- {dob}--{city}</h3></div>
  )
}
const Parent  = () =>{
    return (
        <div>
            <Child/>
            <Child name = "Bishwaraj Paul"/>
            <Child dob ="11-11-2022"/>
            <Child city ="mysore"/>
        </div>
    )

}

Child.defaultProps = {
name : "default",
dob : "default",
city: "default"
}
export default Parent;