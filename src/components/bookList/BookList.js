import { collection, getDocs } from 'firebase/firestore'
import React from 'react'
import { useEffect, useState } from 'react'
import { BookItem } from '../bookItem/BookItem'
import db from '../../firebase/firebase'


export const BookList = () => {
  const [books, setBooks] = useState([]);
  const bookCollection = collection(db, 'books');

  useEffect(() => {
    getDocs(bookCollection)
      .then((snapshot) => {
        return setBooks(snapshot.docs.map((doc) => {
          const data = doc.data();
          const id = doc.id;
          return { id, ...data }
        }))
      })
      .catch(err => console.log(err.message))
  }, [bookCollection]);

  return (
    books.map((book) => (
      <BookItem key={book.id} {...book} />
    ))
  )
} 
