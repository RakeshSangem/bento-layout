import React from "react";

interface MainImageProps {
  mainImage: string;
}

const MainImage: React.FC<MainImageProps> = ({ mainImage }) => {
  return (
    <div className="w-full">
      <img
        className="h-32 w-full object-cover"
        src={mainImage}
        alt="Card image"
      />
    </div>
  );
};

export default MainImage;
