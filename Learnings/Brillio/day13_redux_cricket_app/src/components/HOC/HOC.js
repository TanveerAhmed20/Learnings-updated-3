import player from './player.json'
import React from 'react'

const withUser = (Comp)=>{
    return (props)=>{
        return <Comp {...props} player ={player} /> //equivalent to msg <Child player={player}  />
    }
}

export default withUser;