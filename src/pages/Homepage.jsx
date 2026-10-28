import { MovieCard } from "../components/MovieCard"
import "../App.css"
import { useEffect, useState } from "react"

export function HomePage(){

    


    const movieList = [
        {id : 1, title : "ramayana", releaseDate: "12345", url: "https://media.istockphoto.com/id/1355176914/photo/movie-theater-during-the-screening-of-an-animated-movie.jpg?s=612x612&w=0&k=20&c=IMnAa8LT6Da6is7QMo3wJWJFdYFEyHGMaB2XAquIWwY="},
        {id : 2, title : "varanasi", releaseDate: "12345", url: "https://media.istockphoto.com/id/1355176914/photo/movie-theater-during-the-screening-of-an-animated-movie.jpg?s=612x612&w=0&k=20&c=IMnAa8LT6Da6is7QMo3wJWJFdYFEyHGMaB2XAquIWwY="},
        {id : 3, title : "dhurandhar", releaseDate: "12345", url: "https://media.istockphoto.com/id/1355176914/photo/movie-theater-during-the-screening-of-an-animated-movie.jpg?s=612x612&w=0&k=20&c=IMnAa8LT6Da6is7QMo3wJWJFdYFEyHGMaB2XAquIWwY="},
        {id : 4, title : "doomsday", releaseDate: "12345", url: "https://media.istockphoto.com/id/1355176914/photo/movie-theater-during-the-screening-of-an-animated-movie.jpg?s=612x612&w=0&k=20&c=IMnAa8LT6Da6is7QMo3wJWJFdYFEyHGMaB2XAquIWwY="},
        {id : 5, title : "spirit", releaseDate: "12345", url: "https://media.istockphoto.com/id/1355176914/photo/movie-theater-during-the-screening-of-an-animated-movie.jpg?s=612x612&w=0&k=20&c=IMnAa8LT6Da6is7QMo3wJWJFdYFEyHGMaB2XAquIWwY="},
    ]
    
    const [search, setSearch] = useState("");   

    // gets triggered on every re-render
    // thus no need of useEffect
    // everytime the input changes, search changes, site re-renders and updated list is shown
    const filteredMovies = movieList.filter(movie => movie.title.toLowerCase().startsWith(search.trim().toLowerCase()))
    

    return <div className="homepage">

        <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="search movie..." />
        {/* <button type="submit" onClick={handleSearch}>search</button> */}

    {filteredMovies.length>0
        ? (<div className="movie-list">
        {/* either use () , or return div in case of {} */}
        {filteredMovies.map(movie => <MovieCard movie={movie} key={movie.id}/>
        )}
        </div>)
        : (<div>no movies found!!!</div>)
    
    }
    </div>


}

