import { useParams, useLocation  } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import { fetchById } from "components/Fetch"
import { Outlet } from "react-router-dom"
import { StyledImg, FlexDiv, InfoDiv, AdditionalDiv, NavItem, Li, Button, GoBack} from "./MovieDetails.styled"
import { BiChevronsLeft } from 'react-icons/bi'

const MovieDetails = () => { 
    const { filmId } = useParams()
    const [film, setfilm] = useState(null);


    const location = useLocation();
    const backLinkHref = location.state?.from ?? '/';
    const backLocation = useRef(backLinkHref);
    
    useEffect(() => {
        fetchById(filmId).then(data => {
            setfilm(data.data);
        }).catch(err => {
        console.log(err);
        });
    }, [filmId]);

    if (film === null) { 
        return
    }
    const {genres, vote_average, title, poster_path, overview, release_date } = film;
    const genresArr = genres.map((genre) => { return (genre.name) })
    const genre = genresArr.join(" ")
    
    const score = Math.round(vote_average * 10)
    const data = release_date.substring(0, 4)
    
    return (
        <>
        <Button type="button"><GoBack to={backLocation.current}><BiChevronsLeft />Go Back</GoBack></Button>
        <FlexDiv>
            <StyledImg src={poster_path ? `https://image.tmdb.org/t/p/w342${poster_path}` : 'https://www.freeiconspng.com/uploads/no-image-icon-23.jpg'} alt='' />
            <InfoDiv>
                <h2>{title} ({data})</h2>
                <p>Use Score: {score}%</p>
                <b>Overview</b>
                <p>{overview}</p>
                <b>Genres</b>
                <p>{genre}</p>
            </InfoDiv>
        </FlexDiv>
            <AdditionalDiv>
                <p>Additional information</p>
                <ul>
                    <Li><NavItem to="cast">Cast</NavItem></Li>
                    <Li><NavItem to="rewiews">Rewiews</NavItem></Li>
                </ul>
            </AdditionalDiv>

            <Outlet />
            
        </>
    )
}
export default MovieDetails;