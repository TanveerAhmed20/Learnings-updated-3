// create action method to handle dispatch
import { AddPlayerAction, Player } from "../../types";
import { ADD_PLAYER } from "../action-types";

let playerID = 0

export const addPlayer = (player: Player) => {
    const addPlayerAction: AddPlayerAction = {
        type: ADD_PLAYER,
        // creates a payload object with player and id
        payload: {
            ...player,
            id: ++playerID
        }
    }
    return addPlayerAction;
}
