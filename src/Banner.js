import React, { useEffect, useState } from "react";
import "./Banner.css";
import requests from "./Request";
import axios from './axios';


function Banner() {
  //FETCH THE MOVIE FROM TMDB
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  //ADD PONCTIATION AT THE END OF A LONG STRING
  function truncate(string, length) {
    if (string?.length > length) return string.substring(0, length + 2) + "...";
    else return string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.orignal_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 200)} {/* sent the movie overview to the truncate function we created to add ponctuation on te 200th letter */}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
      
    </header>
  );
}

export default Banner;
