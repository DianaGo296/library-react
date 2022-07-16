import './books.scss'
import { BookList } from '../../components/bookList/BookList'

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