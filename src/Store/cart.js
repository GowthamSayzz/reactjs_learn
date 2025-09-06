import { createSlice } from "@reduxjs/toolkit"

let cartItemsSlice = createSlice({
    name: 'cartItems',
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            console.log('action', action.payload);
            state.push(action.payload);
            return state;
        },
        removeItem: (state, action) => {
            console.log('action', action.payload);
            state.pop(action.payload);
            return state;
        }
    }
});

export const {addItem, removeItem} = cartItemsSlice.actions;
export default cartItemsSlice.reducer;