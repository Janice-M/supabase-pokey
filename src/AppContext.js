import {createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
    user : null,
    pokemon: null,
    pokemons:[],
    isEditing: false,
    isLoggedIN: false,
}