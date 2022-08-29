import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../../redux/bookSlice';
import { BookItem } from '../bookItem/BookItem';


export const BookList = () => {

  const book = useSelector((state) => state.book);
  // const [showBooks, setShowbook] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(fetchBooks());

      // console.log(book.books.map(x => x.id));
    }
  }, [dispatch]);






  return (
    <>
      {!book.loading && book.books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))
      }
    </>
  )
}

/*
  


  {book.loading && <div className='loader-container'><div className="loader"></div></div>}
      



      {book.books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}


       
     
*/

/* {book.loading && <div>Loading....</div>}
      {!book.loading && book.error ? <div>Error: {book.error}</div> : null}

      {!book.loading && book.books.length ? (
        book.books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))
      ) : null} */


