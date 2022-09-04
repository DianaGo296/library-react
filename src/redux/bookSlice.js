import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, doc, setDoc } from 'firebase/firestore';
import db from '../firebase/firebase';

const bookCollection = collection(db, 'books');

let getAllBooks = async () => {
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
}

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
    getAllBooks();
});



export const updateBooks = createAsyncThunk('books/updateBooks', async (data) => {
    // console.log(data)
    try {
        const bookRef = doc(db, "books", data.id);

        const newData = {
            availble: data.availble,
            userName: data.userName
        }

        await setDoc(bookRef, newData, { merge: true })


        // try {
        //     const snapshot = await getDocs(bookCollection);
        //     const newResults = snapshot.docs.map((doc) => {
        //         const data = doc.data();
        //         const id = doc.id;
        //         return { id, ...data };
        //     });
        //     console.log(newResults)
        //     return newResults
        // }
        // catch (e) {
        //     console.log(e)
        // }


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



        // builder.addCase(updateBooks.pending, (state) => {
        //     state.status = 'loading'
        // });

        builder.addCase(updateBooks.fulfilled, (state, action) => {

        });

        builder.addCase(updateBooks.rejected, (state, action) => {
            state.error = action.error.message
        });
    }
});

export default bookSlice.reducer;
export const { updateBook } = bookSlice.actions

