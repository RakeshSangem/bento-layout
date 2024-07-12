import React from "react";
import Header from "./Header";
import Description from "./Description";
import Followers from "./Followers";
import MainImage from "./MainImage";
import Videos from "./Videos";

interface Follower {
  count: string;
}

interface SocialCardProps {
  platform: string;
  name: string;
  description: string;
  followers: Follower[];
  mainImage: string;
  profileImage: string;
  videos: string[];
  w: number;
  h: number;
}

const SocialCard: React.FC<SocialCardProps> = ({
  w,
  h,
  platform = "YouTube",
  name = "Abhijeet Punia",
  description = "Intern @DRDO | UX Consulting | Google UX Design Process Certified | @pitch Playoff'23 Design Content Winner",
  followers = [{ count: "20K" }],
  mainImage = "https://images.pexels.com/photos/259526/pexels-photo-259526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  profileImage = "https://pbs.twimg.com/profile_images/1587160193158500353/P3gQhoHU_400x400.jpg",
  videos = [],
}) => {
  const isSquare = w === h;
  const isLandscape = w > h;
  const isPortrait = h > w;

  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-md flex flex-col">
      {!(isSquare && isPortrait) && <MainImage mainImage={mainImage} />}
      <div className="relative p-5 flex-1 flex flex-col justify-between">
        <Header
          platform={platform}
          name={name}
          profileImage={profileImage}
          followers={followers}
        />
        {!isSquare && !isLandscape && <Description description={description} />}
        {videos.length > 0 && <Videos videos={videos} />}
      </div>
    </div>
  );
};

export default SocialCard;
