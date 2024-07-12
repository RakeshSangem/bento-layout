import React from "react";

interface VideosProps {
  videos: string[];
}

const Videos: React.FC<VideosProps> = ({ videos }) => {
  return (
    <div className="mt-4 grid grid-cols-2 gap-2">
      {videos.map((video, index) => (
        <img
          key={index}
          src={video}
          alt={`Video thumbnail ${index + 1}`}
          className="w-full object-cover"
        />
      ))}
    </div>
  );
};

export default Videos;
