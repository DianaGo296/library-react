const initialState = {
    books: []
}

export const BooksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setBooks: (state, action) => {
            state.books = action.payload
        }
    }
})

export const selectBooks = (state) => state.books