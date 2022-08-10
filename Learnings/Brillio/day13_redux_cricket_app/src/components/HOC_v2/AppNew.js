import React from 'react'
import Child from './Child'
const AppNew = () => {
  return (
    <div>
        <h1>App Component</h1>
        <Child msg ="hello" howdy={"howdy"}/>
    </div>
  )
}

export default AppNew