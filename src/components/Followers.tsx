import React from "react";

interface Follower {
  count: string;
}

interface FollowersProps {
  followers: Follower[];
}

const Followers: React.FC<FollowersProps> = ({ followers }) => {
  return (
    <div className="flex justify-around mt-4">
      {followers.map((follower, index) => (
        <div key={index} className="text-center">
          <span className="text-3xl font-bold text-white">
            {follower.count}
          </span>
          <span className="text-gray-400"> Followers</span>
        </div>
      ))}
    </div>
  );
};

export default Followers;
