interface ContentProps {
  title?: string;
}

export function Content(props: ContentProps) {
  return (
    <div className="flex flex-col flex-wrap sm:flex-row">
      <div className="relative  mx-auto mb-12 w-screen">
        <div className=" mx-auto w-10/12 overflow-hidden rounded-lg shadow lg:flex">
          <div className="w-full bg-white p-2 lg:pb-12">
            <h5 className="text-center text-xl font-extrabold leading-5 text-gray-900  sm:text-2xl sm:leading-9 ">
              {props.title || "Youtube"} Tools
            </h5>
            <form action="" className="mt-8 flex justify-center">
              <input autoFocus placeholder="Masukkan Link disini" type="text" className="h-8 w-10/12 rounded-lg border border-indigo-400 p-5 focus:border-none" />
              <button className="mx-3 h-10 rounded-lg bg-indigo-400 px-4 text-xs text-white md:text-base">Gass!</button>
            </form>
          </div>
        </div>

      </div>
      <div className="relative  mx-auto mb-12 w-screen">
        <div className=" mx-auto w-10/12 overflow-hidden rounded-lg shadow lg:flex">

          <div className="w-full bg-white px-6 py-8 lg:p-12">
            <h5 className="mb-4 text-base font-extrabold leading-5 text-gray-900  sm:text-2xl sm:leading-9 ">
              Opening Sukitte Ii na yo - Friendship (Lirik & Terjemahan Indonesia)
            </h5>
            <div className="flex">
              <img className="rounded-lg border shadow-lg" src="https://img.youtube.com/vi/eZskFo64rs8/mqdefault.jpg" alt="Shingeki" />
              <div className="ml-5 block self-end align-bottom text-base decoration-black">
                <a className="my-2" href="https://www.youtube.com/channel/UCJM7zRCjSoYTIN0AaSP3B_Q">Author : 9 Pika</a>
                <p className="my-2">Durasi : 00:05:07</p>
                <div className="flex">
                  <button className="my-2 h-10 rounded-lg bg-indigo-400 px-3 text-white">Search</button>
                  <button className="m-2 h-10 rounded-lg bg-indigo-400 px-3 text-white">Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
