import { ADD_PLAYER } from "./store/action-types";

export type Player = {
    id?: number;
    name: string;
    type: string;
    country: string;
    image: string;
}
export interface AddPlayerAction {
    type: typeof ADD_PLAYER;
    payload: Player;
}

export type PlayerActionDispatch =
    (action: AddPlayerAction) => void;