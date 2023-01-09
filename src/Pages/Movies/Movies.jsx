import { useState, useEffect } from "react"
import { useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { fetchByName } from "components/Fetch";
import { SerchForm } from "components/SerchForm/SerchForm";
import { NavItem, Li } from "./Movies.styled";

const Movies = () => { 

    const [movieList, setMovieList] = useState([]);
    const [seachParams, setSearchParams] = useSearchParams();
    const parametr = seachParams.get('query') ?? '';
    const location = useLocation();

    useEffect(() => {
        if (parametr === '') { 
            return;
        }
        fetchByName(parametr)
            .then(data => {
            setMovieList(data.data.results);
            })
            .catch(err => {
            console.log(err);
            });
    }, [parametr]);
    

    const handleFormSubmit = value => { 
    setSearchParams(value !== "" ? {query: value} : {})
    }


    return (
    <div>
        <SerchForm onSubmit={handleFormSubmit} />
        <ul>
                {movieList.map(({title, id}) => <Li key={id}><NavItem  to={location.pathname === '/' ? `movies/${id}` : `${id}`} state={{ from: location }}>{title}</NavItem></Li> ) }    
        </ul>
    </div>
    )
}
export default Movies;