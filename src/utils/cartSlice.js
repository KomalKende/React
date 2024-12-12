import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        itemcart : [],
    },
    reducers: {
        addItem: (state, action) => {
            state.itemcart.push(action.payload)
        },
        removeItem: (state) => {
            state.itemcart.pop()
        },
        clearCart: (state) => {
            state.itemcart.length = 0
        }
    }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;