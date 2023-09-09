import React, { useState, useEffect } from "react";
import Youtube from "./downloader/Youtube";
import axios from "axios";

interface ContentProps {
  title?: string;
}

export function Content(props: ContentProps) {
  const [query, setQuery] = useState("");
  const [videoData, setVideoData] = useState(null); // State untuk data video

  async function fetchVideoData(url:string) {
    try {
      const response = await axios.get(url);
      if (response.status === 200 && response.data && response.data.result) {
        return response.data.result;
      }
    } catch (error) {
      console.error("Error fetching video data:", error);
    }
    return null;
  }


  useEffect(() => {
    if (query) {
      const apiUrl = `https://api.lolhuman.xyz/api/ytplay?apikey=${process.env.APIKEY}&query=${query}`;

      fetchVideoData(apiUrl).then((data) => {
        // if (data) {
          setVideoData(data);
        // }
      });
    }
  }, [query]);

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const input = e.currentTarget[0].value;
    setQuery(input);
  };

  return (
    <div className="flex flex-col flex-wrap sm:flex-row">
      <div className="relative mx-auto mb-12 w-screen">
        <div className="mx-auto w-10/12 overflow-hidden rounded-lg shadow lg:flex">
          <div className="w-full bg-white p-2 lg:pb-12">
            <h5 className="text-center text-xl font-extrabold leading-5 text-gray-900 sm:text-2xl sm:leading-9">
              {props.title || "Youtube"} Tools
            </h5>
            <form onSubmit={onSearch} className="mt-8 flex justify-center">
              <input
                autoFocus
                placeholder="Masukkan Link disini"
                type="text"
                className="h-8 w-10/12 rounded-lg border border-indigo-400 p-2 focus:border-none"
              />
              <button className="mx-3 h-10 rounded-lg bg-indigo-400 px-4 text-xs text-white md:text-base">
                Gass!
              </button>
            </form>
          </div>
        </div>
      </div>
      {videoData && <Youtube params={{ data: videoData }} />}
    </div>
  );
}
