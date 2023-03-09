import React, { useState } from "react";

function Images() {
  const images = ["/proje-images.png", "/proje-images-2.png"];

  const [currentImage, setCurrentImage] = useState(0);

  const handleClick = () => {
    setCurrentImage(currentImage === 0 ? 1 : 0);
  };

  return (
    <div className="images-container">
      <div className="images">
        <img src={images[currentImage]} onClick={handleClick} alt="" />
      </div>
    </div>
  );
}

export default Images;
