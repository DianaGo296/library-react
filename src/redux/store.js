
import { configureStore } from "@reduxjs/toolkit";
import BooksReducer from './bookSlice';

export const store = configureStore({ 
    reducer: {
        book: BooksReducer,        
    },

    // middleware: (getDefaultMiddleware) => getDefaultMiddleware()
 });





// store > holds the state of the app  ||  "cake store"
// action > describes what happened in the app   ||  "cake ordered"
// reducer > ties the store and actions together, handle the action and decides how to update the state || "shopkeeper: recieve the order > take one cake from store and update the ammount of cakes"


/* Principles
    1. The Global state of the app is stored as an object inside a single store
    2. The only way to change the state is to dispatch an action -> an object that describes what happend
       state is read only -> to update the state, need to let redux know about that with an action. (dispatch an action)
    3. To specify how the state tree is updates based on actions, write pure reducers
       Reducer - (take previousState + action) => returns new state       
*/

/* REDUX FLOW: 
    Redux store (state) > stores all the states
    app > cannot update store directly
    action > in order to update the state need to dispatch an action
    reducer > handles that action and updates the current state in the store
*/

/* Store Responsibilities 
    > Holds app state
    > Allows access to state via getState()
    > Allows state to be updates via dispatch(action)
    > Register listeners via subscribe(listener) = executet any time the state and the store changes
    > Handles unregistering of listeners via the function retured by subscribe
*/