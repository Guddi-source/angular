import { createReducer, on } from "@ngrx/store";
import { addToCart, removeFromCart } from "./cart.actions";

export const initialState = 0;

export const cartReducer = createReducer(
    initialState,
    on(addToCart, (state) => {
        return state + 1;
    }),
    on(removeFromCart, 
        (state) => {
            return (state>0) ? state - 1 : state;
        }
    ),
)