import YoutubeDetail from "@/pages/api/YoutubeDetail";
import React from "react";
export default function Youtube({ params }: { params: { data: string } }) {

  const videoData = JSON.parse(params.data);
  console.log(videoData)

  return (
    <div className="relative mx-auto mb-12 w-screen">
      <div className="mx-auto w-10/12 overflow-hidden rounded-lg shadow lg:flex">
        <div className="w-full bg-white px-6 py-8 lg:p-12">
          <h5 className="mb-4 text-base font-extrabold leading-5 text-gray-900 sm:text-2xl sm:leading-9">
            {videoData.title}
          </h5>
          <YoutubeDetail videoData={videoData} />
        </div>
      </div>
    </div>
  );
}
