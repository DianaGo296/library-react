import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../../redux/bookSlice';
import { BookItem } from '../bookItem/BookItem';


export const BookList = () => {

  const book = useSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchBooks());

  }, [dispatch]);
  console.log(book.books);


  return (
    <>
      {book.loading && <div className='loader-container'><div className="loader"></div></div>}
      {!book.loading && book.books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))
      }
    </>
  )
}