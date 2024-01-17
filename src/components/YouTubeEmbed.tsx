import { getYouTubeVideoId } from "@/utils/combineRecipes";
import React from "react";

type YouTubeEmbedProps = {
    url: string;
}

const YouTubeEmbed = ({ url }: YouTubeEmbedProps) => {
  console.log(url)
  return (
    <div className="iframe-container rounded-xl my-5">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${getYouTubeVideoId(url)}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
