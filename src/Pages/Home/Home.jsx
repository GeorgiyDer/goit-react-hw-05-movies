
import { useState, useEffect } from "react"
import { NavItem, Li} from "./Home.styled";
import { fetch } from "components/Fetch";


const Home = () => { 
    const [films, setfilms] = useState([]);

    useEffect(() => {
        fetch().then(data => {
            setfilms(data.data.results);
        })
    }, []);


    return (
        <div>
            <h1>Trending Today</h1>
            <ul>
                {films.map(({id, title}) => <Li key={id}><NavItem  to={`movies/${id}`}>{title }</NavItem></Li> )}
            </ul>
        </div> 
    )
}
export default Home;