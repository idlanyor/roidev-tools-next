// YoutubeDetail.tsx
import React from "react";

interface YoutubeDetailProps {
  videoData: {
    title: string;
    uploader: string;
    channel: string;
    duration: string;
    thumbnail: string;
    description: string;
    link: string;
    video: string;
    audio: string;
  };
}

export default function YoutubeDetail({ videoData }: YoutubeDetailProps) {
  const dlVideo = () => {
    let anchor: any = document.createElement("a");
    anchor.href = videoData.video.link;
    anchor.download = `${videoData.title}.mp4`;
    anchor.click();

  };
  const dlAudio = () => {
    let anchor: any = document.createElement("a");
    anchor.href = videoData.audio.link;
    anchor.download = `${videoData.title}.mp3`;
    anchor.click();
  };
  return (
    <div className="flex flex-col lg:flex-row">
      <img src={videoData.thumbnail} alt={videoData.title} />
      <div className="block align-bottom text-base decoration-black lg:ml-5 lg:self-end">
        <p >Judul: {videoData.title}</p><hr />
        <a href={videoData.channel}>Uploader: <span className="text-blue-500">{videoData.uploader}</span></a><hr />
        <p>Durasi: {videoData.duration}</p><hr />
        <p>Resolusi: {videoData.duration}</p><hr />
        <div className="flex ">
          <button onClick={dlVideo} className="my-2 h-10 rounded-lg bg-indigo-400 px-3 text-white">Video</button>
          <button onClick={dlAudio} className="mx-5 my-2 h-10 rounded-lg bg-indigo-400 px-3 text-white">MP3</button>
        </div>
      </div>
    </div>
  );
}
