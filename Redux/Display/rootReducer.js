import React from 'react'
import {DECREMENT, DISABLE_BUTTONS, ENABLE_BUTTONS, INCREMENT} from "./types";
import {combineReducers} from "redux";
import {AccessTokenReducer} from '../Form/reducer'
import {
    ChangeColorFonReducer,
    ChangeColorTextReducer,
    ChangeThemeReducer,
    ChangeWindowsReducer, OnResetReducer
} from "../About/reducesAbout";

const counterReducer = (state = 0, action) => {
    if (action.type === INCREMENT) {
        return state + 1
    } else if (action.type === DECREMENT) {
        return state - 1
    }
        return state
}

const initialButtonState = {
    disabled: false
}

const blockButtons = (state = initialButtonState, action) => {
    switch (action.type) {
        case ENABLE_BUTTONS:
            return {...state, disabled: false}
        case DISABLE_BUTTONS:
            return {...state, disabled: true}
        default: return state
    }
}

export const rootReducer = combineReducers({
    counter: counterReducer,
    block: blockButtons,
    token: AccessTokenReducer,
    background: ChangeColorFonReducer,
    text: ChangeColorTextReducer,
    theme: ChangeThemeReducer,
    windows: ChangeWindowsReducer,
    reset: OnResetReducer,
    loading: AccessTokenReducer,
    auth: AccessTokenReducer,
})

