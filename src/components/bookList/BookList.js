// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchBooks } from '../../redux/bookSlice';

import { BookItem } from '../bookItem/BookItem';
import { useGetBooksQuery } from "../../redux/booksApi"

export const BookList = () => {

  const { data, isLoading, isSuccess, isError, error} = useGetBooksQuery();

  return (
    <>
      {isLoading && <div className='loader-container'><div className="loader"></div></div>}
      {isSuccess && data?.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}

      {isError && console.log(error.message)}
    </>
  )
}