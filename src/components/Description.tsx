import React from "react";

interface DescriptionProps {
  description: string;
}

const Description: React.FC<DescriptionProps> = ({ description }) => {
  return <p className="mt-4 text-white">{description}</p>;
};

export default Description;
