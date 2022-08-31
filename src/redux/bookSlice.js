import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from 'firebase/firestore';
import db from '../firebase/firebase';

const bookCollection = collection(db, 'books');

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
    try {
        const snapshot = await getDocs(bookCollection);
        return snapshot.docs.map((doc) => {
            const data = doc.data();
            const id = doc.id;
            return { id, ...data };
        });
    }
    catch (e) {
        console.log(e)
    }
});

const initialState = {
    loading: true,
    books: []
}

export const bookSlice = createSlice({
    name: 'books',
    initialState,

    reducers: {
        updateBooks: (state, action) => {
            state.books = action.payload
        }
    },

    extraReducers: (builder) => {
        builder.addCase(fetchBooks.pending, (state) => {
            state.loading = true
        });

        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            state.loading = false
            state.books = action.payload
        });

        builder.addCase(fetchBooks.rejected, (state) => {
            state.loading = false
            state.books = []
        });
    }
});

export default bookSlice.reducer;
export const { updateBooks } = bookSlice.actions

