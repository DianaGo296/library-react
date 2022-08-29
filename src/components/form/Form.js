import { useEffect, useState } from 'react';
import { updateDoc, doc } from 'firebase/firestore';
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

    // useEffect(() => {
    //     return () => {
    //       dispatch(fetchBooks());
    //     }
    //   }, [dispatch]);
    
    // const getBookId = book.book.map(getId => getId.id)

    const getDocId = doc(db, 'books', bookId)

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name.length > 0) {
        
            dispatch(updateBooks(
                updateDoc(getDocId, {
                    userName: name,
                    availble: false
                }, { merge: true })
            ))



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

