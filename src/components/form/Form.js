import { useState } from 'react';
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore'
import db from '../../firebase/firebase'
import './Form.scss';

export const Form = ({ bookId, bookTitle }) => {


    const [name, setName] = useState('');
    const [validation, setValidation] = useState(false);
    const [hide, setHide] = useState(true);

    const rentedBooksCollection = collection(db, 'rented_books');
    const getDocId = doc(db, 'books', bookId)


    const handleSubmit = (e) => {
        e.preventDefault();

        if (name.length > 0) {
            addDoc(rentedBooksCollection, {
                userName: name,
                date: new Date(),
                rentedBookId: bookId,
                bookName: bookTitle
            }).then(() => {
                updateDoc(getDocId, {
                    availble: false
                });

                console.log('Yay, you Just rented ' + bookTitle);

            }).catch((err) => console.log('Something Went Wrong ' + err.message));

            setName('');
            setValidation(false);
            setHide(false)

        } else {
            setValidation(true);
        }
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

