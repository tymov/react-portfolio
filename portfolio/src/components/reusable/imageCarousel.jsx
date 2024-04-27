import React from "react";

const ImageCarousel = ({ images }) => {
  return (
    <div className="image-carousel">
      <div className="carousel">
        {images.map((image, index) => (
          <div key={index} className="carousel-item">
            <img src={image} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
