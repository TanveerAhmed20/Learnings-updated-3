import { createContext } from "react";

const userContext = createContext({
    id:null,
    name:null
});

export const UserProvider = userContext.Provider;
export const UserConsumer = userContext.Consumer;