import React from "react";
import {
  CARD_SIZE_LARGE_WIDE,
  CARD_SIZE_LARGE_SQUARE,
  CARD_SIZE_TALL,
  CARD_SIZE_SQUARE,
  CARD_SIZE_WIDE,
  getCardSizeType,
} from "./../card.config";
import { cn } from "../lib/utils";
import YoutubeIcon from "./icons/Youtube.icon";

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
  name = "John marteen",
  description = "Intern @DRDO | UX Consulting | Google UX Design Process Certified | @pitch Playoff'23 Design Content Winner",
  followers,
  mainImage = "https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  profileImage = "https://cdn.icon-icons.com/icons2/3261/PNG/512/youtube_logo_icon_206627.png",
  videos = [
    "https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ],
}) => {
  const cardSizeType = getCardSizeType(w, h);

  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-md flex flex-col h-full w-full">
      {/* {cardSizeType !== "SQUARE" && cardSizeType !== "TALL" && (
        <div className="flex-shrink-0 w-full">
          <img
            className="h-32 w-full object-cover"
            src={mainImage}
            alt="Card image"
          />
        </div>
      )} */}
      <div className="relative p-4 flex flex-col h-full">
        <div
          className={cn(
            "flex h-full",
            cardSizeType === "SQUARE" && "flex-col justify-between",
            cardSizeType === "TALL" && "flex-col gap-2",
            cardSizeType === "WIDE" && "flex-row justify-between",
            cardSizeType === "LARGE_WIDE" && "flex-row justify-between",
            cardSizeType === "LARGE_SQUARE" &&
              "flex-row justify-between items-start"
          )}
        >
          <div
            className={cn(
              "flex flex-col",
              cardSizeType === "LARGE_WIDE" && "flex-row",
              cardSizeType === "WIDE" && "flex-row"
            )}
          >
            <div className="border bg-white size-12 rounded-full overflow-hidden grid place-items-center">
              <YoutubeIcon />
            </div>
            <div className="">
              <h3 className="text-white text-lg font-semibold">{platform}</h3>
              <p className="text-white/80 text-sm font-light">{name}</p>
            </div>
          </div>
          <button className="group flex items-center gap-x-2 rounded-lg bg-indigo-500 px-4 py-1.5 text-white hover:bg-indigo-700">
            Subscribe
            <svg
              className="text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1 translate-y-0.5"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill=""
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.410156 0.660156H8.95396V0.660474L11.0413 2.75536L7.97439 5.81112L10.9262 8.21807V11.3398H7.96875V5.81675L2.51421 11.2515L0.426758 9.15649L5.98576 3.61763H0.410156V0.660156Z"
                fill="currentcolor"
              />
            </svg>
          </button>
        </div>
        {cardSizeType !== "SQUARE" && cardSizeType === "LARGE_SQUARE" && (
          <p className="mt-2 text-white/90 text-sm">{description}</p>
        )}
        <div
          className={cn(
            "flex-1",
            cardSizeType === "SQUARE" && "hidden",
            cardSizeType === "LARGE_WIDE" && "hidden",
            cardSizeType === "TALL" && "flex items-center justify-center"
          )}
        >
          {videos?.length > 0 && (
            <div
              className={cn(
                "mt-1 grid w-full items-center grid-cols-2 gap-2 justify-around rounded-lg",
                cardSizeType === "TALL" && "grid-cols-1 grid-rows-2"
              )}
            >
              {videos
                .slice(0, cardSizeType === "TALL" ? 2 : videos.length)
                .map((video, index) => (
                  <div key={index} className="h-full w-full">
                    <img
                      className="object-cover rounded"
                      src={video}
                      alt={`Video ${index + 1}`}
                    />
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SocialCard;
