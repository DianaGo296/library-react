import './bookItem.scss';
import { Form } from '../form/Form';
import { useState, useEffect } from 'react';



export const BookItem = ({ book }) => {
    const [showForm, setShowform] = useState(false);
    const [disableBtn, setDisableBtn] = useState(false);
    const [btnTxt, setBtntxt] = useState('Rent This Book');


    useEffect(() => {
        if (book.availble === false) {
            setDisableBtn(true);
            setBtntxt('This Book Is Not Availble');
        }
    }, [book.availble])

    return (
        <div className="book-item" id={book.id}>
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <button onClick={() => setShowform(true)} type='button' className='open-from' disabled={disableBtn}>{btnTxt}</button>
            {showForm && <Form bookId={book.id} />}
        </div>
    )
}