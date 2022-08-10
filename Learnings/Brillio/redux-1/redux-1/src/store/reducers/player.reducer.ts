import { AddPlayerAction } from "../../types";
import { ADD_PLAYER } from "../action-types";

// State structure

/*
{
    "1": {
        name: "Dhoni",
        type: "Batsman",
		id: 1
        ... other attributes
    },
    "2": {
        ... other player details
    },
    "3": {

    }
} 
*/

// state is always an object and not array
const initialState = {
};

// Reducer logic explanation

// const a = {
//   name: "Virat",
//   type: "Batsman"
// };

// const x = "name";

// const b = {
//   [x]: "Dhoni",
//   type: "batsman"
// };

// const data = {};

// function setKeyValue(data, { key, value }) {
//   return {
//     ...data,
//     [key]: value
//   };
// }

// let curr = setKeyValue(data, { key: "name", value: "dhoni" });

// curr = setKeyValue(curr, { key: "type", value: "batsman" });

// console.log(curr);

const PlayerReducer = (state = initialState, action: AddPlayerAction) => {
    switch (action.type) {
        case ADD_PLAYER:
            /* 
               if player id is undefined return current state.
               else create a new property in our state with id as key and
               payload as value 
            */
           // state should always either return a new object state or should return 
           // the same object state. (Immutable)
         if (action.payload.id !== undefined) {
                return {
                    ...state,
                    // replace or create new player based on id.
                    [action.payload.id]: {
                        ...action.payload
                    }
                }
            } else {
                return state;
            }
        default:
            return state;
    }
}

export default PlayerReducer;
