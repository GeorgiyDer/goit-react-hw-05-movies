import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { fetchCast } from "components/Fetch"

const Cast = () => { 

    const { filmId } = useParams()
    const [film, setfilm] = useState([]);

    useEffect(() => {
        fetchCast(filmId).then(data => {
            
            setfilm(data.data.cast);
        }).catch(err => {
        console.log(err);
        });
    }, [filmId]);

    if (!film) { 
        return;
    }

    return (
        <ul>
            {film.map(({ character, name, profile_path }) =>
                (<li key={name}><img src={profile_path ? `https://image.tmdb.org/t/p/w342${profile_path}` : "https://www.freeiconspng.com/uploads/no-image-icon-23.jpg"} alt=""></img><p>{name}</p><p>character: {character}</p></li>))}
        </ul>
    )
}
export default Cast;