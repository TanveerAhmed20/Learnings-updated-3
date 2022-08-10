import withUser from './HOC';
import React from 'react';
const Child = ({player,msg})=>{
    return (
        <div>
            <h1>
                Child :{msg} {player.name} - {player.type}
            </h1>
        </div>

    )
}
export default withUser(Child);