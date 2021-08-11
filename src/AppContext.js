import {createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
    user : null,
    pokemon: null,
    pokemons:[],
    isEditing: false,
    isLoggedIN: false,
}

const AppContext = createContext(initialState)

export const AppContextProvider = ({children}) => {
    const [state, dispatch] = useReducer (AppReducer, initialState);
}