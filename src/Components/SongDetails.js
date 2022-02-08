import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function SongDetails() {
  const [song, setSong] = useState({});
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(API + "/songs/" + id)
      .then((res) => {
        setSong(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(API + "/songs/" + id)
      .then((res) => {
        navigate("/songs");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <article className="Song-Details">
      <h3>
        {song.is_favorite ? <span>⭐️</span> : null} {song.name}
      </h3>
      <h5>
        <span>{song.artist}</span>
      </h5>
      <h6>{song.album}</h6>
      <h6>{song.time}</h6>
      <div className="showNavigation">
        <div>
          <Link to={`/songs`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/songs/${song.id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}

export default SongDetails;
