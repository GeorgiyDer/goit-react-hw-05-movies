import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { fetchReview } from "components/Fetch"

const Rewiews = () => { 

    const { filmId } = useParams()
    const [rewiews, setRewiews] = useState([]);

    useEffect(() => {
        fetchReview(filmId).then(data => {
            setRewiews(data.data.results);
            
        }).catch(err => {
        console.log(err);
        });
    }, [filmId]);
    

    return (
        <ul>
            {rewiews.map(({ author, content,id }) =>
                (<li key={id}><p>{author}</p><p>content: {content} </p></li>))}
            {rewiews.length === 0 && <p>We have no any rewiew for this movie</p>}
        </ul>
    )
}
export default Rewiews;
