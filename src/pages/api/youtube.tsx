// import React from "react";
export function ytAudio() {
  async function fetchData(endpoint: string, query: string) {
    const apikey: string = "roiwithzakiya";
    const res = await fetch(`https://api.lolhuman.xyz/api/${endpoint}?apikey=${apikey}&url=${query}`);
    return res.json();
  }
  fetchData("ytplay", "https://www.youtube.com/watch?v=eZskFo64rs8");
}
// import React from 'react'

export function Youtube() {
  return (
    <div>Youtube</div>
  );
}
