import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import db from '../firebase/firebase';



const getAllBooks = async () => {
    try {
        const bookCollection = collection(db, 'books');
        const snapshot = await getDocs(bookCollection);
        const result = await snapshot.docs.map((doc) => {
            const data = doc.data();
            const id = doc.id;
            return { id, ...data };
        });
        return result;
    } catch (e) {
        throw e;
    }

}

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
    try {
        const result = await getAllBooks();
        return result;
    }
    catch (e) {
        console.log(e)
    }

});


export const updateBooks = createAsyncThunk('books/updateBooks', async (data) => {
    // console.log(data)
    const bookRef = doc(db, "books", data.id);
    try {
        await updateDoc(bookRef, {
            availble: data.availble,
            userName: data.userName
        }, { merge: true })
        const result = await getAllBooks();
        return result;
    }
    catch (e) {
        console.log(e)
    }

});





const initialState = {
    //  'idle' | 'loading' | 'succeeded' | 'failed',
    status: 'idle',
    books: [],
    error: null
}

export const bookSlice = createSlice({
    name: 'books',
    initialState,

    extraReducers: (builder) => {
        // get books
        builder.addCase(fetchBooks.pending, (state) => {
            state.status = 'loading'
        });

        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.books = action.payload
        });

        builder.addCase(fetchBooks.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        });


        // update books
        builder.addCase(updateBooks.pending, (state) => {
            state.status = 'loading'
        });

        builder.addCase(updateBooks.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.books = action.payload
        });

        builder.addCase(updateBooks.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        });
    }
});

export default bookSlice.reducer;
export const { updateBook } = bookSlice.actions

