//this page has movie lists

import { useState } from "react";
import MovieCard from "../components/MovieCard"

export default function Home() {
    const [searchQuery, setSearchQuery] = useState('');
    const movies = [
        { id: 1, title: "Titanic", release_date: '2002' },
        { id: 2, title: "Twilight", release_date: '2012' },
        { id: 3, title: "The Matrix", release_date: '1998' }
    ];

    const handleSearch = () => {

    }



    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for movies..." className="search-input"></input>
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="movies-grid">
                {movies.map(movie => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    )
}
