import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { books, selectBooks } from '../../redux/bookSlice';
import { collection, getDocs } from 'firebase/firestore';
import db from '../../firebase/firebase';
import { BookItem } from '../bookItem/BookItem';


export const BookList = () => {

  const book = useSelector(selectBooks);
  const dispatch = useDispatch();
  const bookCollection = collection(db, 'books');

  useEffect(() => {
    getDocs(bookCollection)
      .then((snapshot) => {
        dispatch(books(snapshot.docs.map((doc) => {
          const data = doc.data();
          const id = doc.id;
          return { id, ...data }
        })
        ))
      })
  }, []);


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

/*
 book.map((book) => (
      <BookItem key={book.id} {...book} />
    ))
*/

/* {book.loading && <div>Loading....</div>}
      {!book.loading && book.error ? <div>Error: {book.error}</div> : null}

      {!book.loading && book.books.length ? (
        book.books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))
      ) : null} */


