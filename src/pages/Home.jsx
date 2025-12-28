//this page has movie lists

import MovieCard from "../components/MovieCard"


export default function Home() {
    const movies = [
        { id: 1, title: "Titanic", release_date: '2002' },
        { id: 2, title: "Twilight", release_date: '2002' },
        { id: 3, title: "The Matrix", release_date: '1998' }
    ]
    return (
        <div className="home">
            <div className="movies-grid">
                {movies.map(movie => (<MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    )
}
