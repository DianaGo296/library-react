import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: true,
    books: []
}

export const bookSlice = createSlice({
    name: 'book',
    initialState,

    reducers: {
        books: (state, action) => {
            state.loading = false
            state.books = action.payload
        },

        updateBooks: (state, action) => {
            state.books = action.payload
        }
    }
});


export const { books, updateBooks } = bookSlice.actions;

// selectors
export const selectBooks = (state) => state.book;

export default bookSlice.reducer;