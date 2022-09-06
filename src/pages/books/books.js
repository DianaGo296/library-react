import './books.scss'
import { BookList } from '../../components/bookList/BookList.js'

export const Books = () => {
    return (
        <div className="books">
            <h1>Rent a book</h1>

            <div className='row'>
               <BookList />
            </div>
        </div>
    )
}