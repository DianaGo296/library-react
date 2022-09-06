import { useState } from 'react';
import { useUpdateBookMutation } from '../../redux/booksApi';
import './Form.scss';

export const Form = ({ bookId }) => {

    const [name, setName] = useState('');
    const [validation, setValidation] = useState(false);
    const [hide, setHide] = useState(true);

    const [updateBook] = useUpdateBookMutation();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // if name was typed
        if (name.length > 0) {
            setValidation(false);
            setName('');

            await updateBook({
                id: bookId,
                userName: name,
                availble: false
            });

        } else {
            setValidation(true)
        }

        setHide(false);
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

