import React from "react";
import "./Images.css";

function Images({ images }) {
  return (
    <div>
      <div className="content">
        {images.map((image, index) => {
          return (
            <img
              key={index}
              src={image.urls.small}
              alt={image.alt_description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Images;
