// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { collection, getDocs } from 'firebase/firestore';
// import db from '../firebase/firebase';


// // get data from fireabse
// const bookCollection = collection(db, 'books');

// // createAsyncThunk > generates pending, fulfilled and rejected automaticly
// export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
//     const snapshot = await getDocs(bookCollection);
//     return snapshot.docs.map((doc) => {
//         const data = doc.data();
//         const id = doc.id;
//         return { id, ...data };
//     });
// });

// // initialState
// const initialState = {
//     loading: false,
//     books: [],
//     error: ''
// }


// // reducer
// export const bookSlice = createSlice({
//     // a name used in action types
//     name: 'books',
//     // the initial state for the reducer
//     initialState,
//     /* reducer:  An object of "case reducers". Key names will be used to generate actions.
//        A "builder callback" function used to add more reducers, or
//        an additional object of "case reducers", where the keys should be other
//        action types */

//     // extraReducers allows createSlice to respond to other action types besides the types it has generated.
//     extraReducers: (builder) => {
//         builder.addCase(fetchBooks.pending, (state) => {
//             state.loading = true
//         });

//         builder.addCase(fetchBooks.fulfilled, (state, action) => {
//             state.loading = false
//             state.books = action.payload
//             state.error = ''
//         });

//         builder.addCase(fetchBooks.rejected, (state, action) => {
//             state.loading = false
//             state.books = []
//             state.error = action.error.message
//         });
//     }
// });

// export default bookSlice.reducer;