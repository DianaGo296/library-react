import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../../redux/bookSlice';
import { BookItem } from '../bookItem/BookItem';


export const BookList = () => {

  const book = useSelector((state) => state.book);
  const status = useSelector((state) => state.book.status);
  const error = useSelector((state) => state.book.error);

  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBooks());
    }
  }, [status, dispatch]);


  let content;

  switch (status) {
    case 'loading':
      content = <div className='loader-container'><div className="loader"></div></div>
      break;

    case 'succeeded':
      content = book.books.map((book) => (
        <BookItem key={book.id} book={book} />
      ));
      break;

    case 'failed':
      content = <div>{error}</div>
      break;

    default:
      break;
  }



  return (
    <>
      {content}
    </>
  )
}