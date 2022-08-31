import { useEffect, useState } from 'react';
import { updateDoc, doc, getDocs, collection } from 'firebase/firestore';
import db from '../../firebase/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { updateBooks, fetchBooks } from '../../redux/bookSlice';
import './Form.scss';

export const Form = ({ bookId }) => {

    const book = useSelector((state) => state.book);
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [validation, setValidation] = useState(false);
    const [hide, setHide] = useState(true);

    // const bookCollection = collection(db, 'books');

    // const getBookId = book.books.map(book => book.id);
    // console.log(getBookId);

    const getDocId = doc(db, 'books', bookId);
    console.log(getDocId);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const bookUpdate = await updateDoc(getDocId,{
            userName: name,
            availble: false

        }).then(() => {
            console.log("update seccess");
        });

        dispatch(updateBooks(bookUpdate))

        // const newArray = [{ userName: name}, {availble: false}]

        // const books = await updateDoc(getDocId, {
        //     userName: name,
        //     availble: false
        // }, { merge: true })

    
        // console.log(books)

        // if (name.length > 0) {



        // if (books && books.length) {   }
        // dispatch(updateBooks(books))
        // setName('');
        // setValidation(false);
        // setHide(false)


        // } else {
        //     setValidation(true);
        // }

    }

    return (
        <>
            {hide && <form onSubmit={handleSubmit}>
                <input placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                <button type='submit'>Submit</button>
                {validation && <p className='validation'>Please Enter Your Name...</p>}
            </form>}
        </>
    )
}

