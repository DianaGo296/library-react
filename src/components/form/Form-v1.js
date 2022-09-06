import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateBooks } from '../../redux/bookSlice';
import './Form.scss';

export const Form = ({ bookId }) => {

    const status = useSelector((state) => state.book.status);
    const [name, setName] = useState('');
    const [validation, setValidation] = useState(false);
    const [hide, setHide] = useState(true);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        // if name was typed
        if (name.length > 0) {
            setValidation(false);
            setName('');

            dispatch(updateBooks({
                id: bookId,
                userName: name,
                availble: false
            }));

        } else {
            setValidation(true)
        }

        // check if books was updated currectly then hide form
        if(status === 'succeeded'){
            setHide(false);
        }        
    }


    return (
        <>
            {hide &&
                <form onSubmit={handleSubmit}>
                    <input placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <button type='submit'>Submit</button>
                    {validation && <p className='validation'>Please Enter Your Name...</p>}
                </form>}
        </>
    )
}

