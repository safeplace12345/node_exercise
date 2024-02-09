import { configureStore, createReducer, createAction } from "@reduxjs/toolkit";

export const actions = {
    setCurrentUser: createAction<any>("APP/setCurrentUser"),
    getQueue: createAction<any[]>("APP/getQueue"),
    getFavorites: createAction<any>("APP/getFavorites"),
    setRecipient: createAction<any>("APP/setRecipient")
}

interface IState {
    user: any,
    recipient: number,
    favorites: any,
    queue: any
}
const initialState: IState = {
    user: {},
    recipient: 1,
    favorites: [],
    queue: []
}

export const usersReducer = createReducer(initialState, (builder) =>
    builder
        .addCase(actions.setCurrentUser, (state, action) => {
            state.user = action.payload
        })
        .addCase(actions.getQueue, (state, action) => {
            state.queue = action.payload
        })
        .addCase(actions.getFavorites, (state, action) => {
            state.favorites = action.payload
        })
        .addCase(actions.setRecipient, (state, action) => {
            state.recipient = action.payload
        })
)

export const store = configureStore({ reducer: { root: usersReducer } });
