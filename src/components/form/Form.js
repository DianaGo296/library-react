import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateBooks } from '../../redux/bookSlice';
import './Form.scss';

export const Form = ({ bookId }) => {

    const [name, setName] = useState('');
    const [validation, setValidation] = useState(false);
    const [hide, setHide] = useState(true);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

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
        // setHide(false);

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

