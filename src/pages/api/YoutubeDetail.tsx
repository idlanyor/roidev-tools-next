// YoutubeDetail.tsx
import React from "react";

interface YoutubeDetailProps {
  videoData: {
    title: string;
    uploader: string;
    duration: string;
    thumbnail: string;
    link: string;
  };
}

export default function YoutubeDetail({ videoData }: YoutubeDetailProps) {
  return (
    <div className="flex">
      <img
        className="rounded-lg border shadow-lg"
        src={videoData.thumbnail}
        alt={videoData.title}
      />
      <div className="ml-5 block self-end align-bottom text-base decoration-black">
        <a className="my-2" href={videoData.uploader}>Author: {videoData.uploader}</a>
        <p className="my-2">Durasi: {videoData.duration}</p>
        <div className="flex">
          <button className="my-2 h-10 rounded-lg bg-indigo-400 px-3 text-white">Download MP3</button>
        </div>
      </div>
    </div>
  );
}
