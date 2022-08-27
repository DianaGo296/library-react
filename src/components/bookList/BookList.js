import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../../redux/bookSlice';
import { BookItem } from '../bookItem/BookItem';


export const BookList = () => {
  const book = useSelector(state => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch])



  return (
    <>
      {book.loading && <div>Loading....</div>}
      {!book.loading && book.error ? <div>Error: {book.error}</div> : null}

      {!book.loading && book.books.length ? (
        book.books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))
      ) : null}
    </>
  )
}





  // const books = useSelector(selectBooks);
  // const [books, setBooks] = useState([]);
  // const bookCollection = collection(db, 'books');

  // useEffect(() => {
  //   getDocs(bookCollection)
  //     .then((snapshot) => {
  //       return setBooks(snapshot.docs.map((doc) => {
  //         const data = doc.data();
  //         const id = doc.id;
  //         return { id, ...data }
  //       }));
  //     })
  //     .catch(err => console.log(err.message))      
  // }, [bookCollection]);