import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout";


const Home = lazy(() => import('../Pages/Home/Home'));
const Movies = lazy(() => import('../Pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../Pages/MovieDetails/MovieDetails'))
const Rewiews = lazy(() => import('../components/Rewiews/Rewiews'));
const Cast = lazy(() => import('../components/Cast/Cast'));


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="movies" element={<Movies />}></Route>
        <Route path="movies/:filmId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="rewiews" element={<Rewiews />}></Route>
        </Route>
      </Route>
    </Routes>
  );
};



