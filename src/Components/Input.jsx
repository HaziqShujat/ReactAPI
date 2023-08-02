import React, { useRef, useState } from "react";
import "./Input.css";
import Images from "./Images";
import axios from "axios";

const API_URL = "https://api.unsplash.com/search/photos";
const IMAGES_PER_PAGE = 30;

function Input() {
  const [images, setImages] = useState([]);

  const searchinput = useRef(null);

  const fetchImages = async () => {
    try {
      const { data } = await axios.get(
        `${API_URL}?query=${
          searchinput.current.value
        }&page=1&per_page=${IMAGES_PER_PAGE}&client_id=${
          import.meta.env.VITE_API_KEY
        }`
      );

      setImages(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    searchinput.current.value;
    fetchImages();
  };
  return (
    <div>
      <div className="main">
        <form onSubmit={handlesubmit}>
          <input
            className="fields"
            type="search"
            ref={searchinput}
            placeholder="Search..."
          />
          <button className="btn">Search</button>
        </form>
      </div>
      <div className="maincont">
        <Images images={images} />
      </div>
    </div>
  );
}

export default Input;
