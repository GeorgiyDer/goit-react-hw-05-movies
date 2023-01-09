import { useState } from "react";
import PropTypes from 'prop-types';

export const SerchForm = ({onSubmit}) => { 

    const [movieName, setMovieName] = useState('')

    const handleNameChange = event => {
        setMovieName(event.currentTarget.value.toLowerCase())
    }

    const handleSubmit = event => { 
        event.preventDefault();

        if (movieName.trim() === '') { 
            alert("Введите имя для поиска")
            return;
        }

        onSubmit(movieName.trim())
        setMovieName('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Movie name"
            onChange={handleNameChange}
            value={movieName}
            name='movieName'
            />
            <button type="submit">
                <span>Search</span>
            </button>
        </form>
    )
}
SerchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};