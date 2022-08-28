import './bookItem.scss';
import { Form } from '../form/Form';
import { useState, useEffect } from 'react';
// import { doc } from 'firebase/firestore'
// import db from '../../firebase/firebase'

export const BookItem = (props) => {
    const { image, title, author, id, availble } = props;
    const [showForm, setShowform] = useState(false);
    const [disableBtn, setDisableBtn] = useState(false);
    const [btnTxt, setBtntxt] = useState('Rent This Book');

    // const getAvailability = doc(db, 'books', availble);

    const handleClick = (e) => {
        e.preventDefault();
        setShowform(true);
    }

    useEffect(() => {
        if (availble === false) {
            setDisableBtn(true);
            setBtntxt('This Book Is Not Availble');
        }
    }, [availble])


    return (
        <div className="book-item" id={id}>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{author}</p>
            <button onClick={handleClick} type='button' className='open-from' disabled={disableBtn}>{btnTxt}</button>
            {showForm && <Form bookId={id} />}
        </div>
    )
}