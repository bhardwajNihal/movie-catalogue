
export const MovieCard = ({movie}) => {


    function addFavourite(){

        alert("added to favourite!")
    }

    return <div className="movie-card">

        {/* <p>movie card</p> */}
        <h3 className="title">{movie.title}</h3>
        <div className="movie-box">
            <img className="movie-image" src={movie.url} alt={movie.title} />
        </div>
        <button onClick={addFavourite} className="favourite-overlay">Add to favourite</button>
        <p >{movie.releaseDate}</p>
        
    </div>
}