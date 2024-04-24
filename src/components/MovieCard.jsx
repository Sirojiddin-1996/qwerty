import "./MovieCard.css";

export default function MovieCard(props) {
  const API_IMG = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="card">
      <div className="poster">
        <span>{props.release_date}</span>
        <img
          src={
            props.poster_path
              ? API_IMG + props.poster_path
              : "https://images.unsplash.com/photo-1540224871915-bc8ffb782bdf?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
      </div>

      <div className="info">
        <p className="title">{props.title.slice(0, 10)}...</p>
        <p className="vote">V {props.vote_average}</p>
      </div>
      <p className="popular">Popularity: {props.popularity}</p>

      <div className="overview">
        <h1 className="overview_title">{props.title}</h1>
        <p className="overview_info">{props.overview}</p>
      </div>
    </div>
  );
}
