

import { NavBar } from "../components/UiComponents";

const HowToUse = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-tr from-rose-300 via-gray-300 to-blue-300 flex flex-col justify-center items-center gap-10 p-5">
      <label className="bg-gradient-to-r from-rose-600 to-black text-transparent bg-clip-text font-bold text-5xl">
        How<span className="text-gray-900"> to use</span>
      </label>
      <p className="text-gray-500 text-sm text-center">
        Download videos easily in just three steps copy the link, paste it, and
        click download. Fast, simple, and secure.
      </p>
      <div className="flex flex-row w-full h-auto xl:h-1/2 gap-5">
        <div className="md:w-1/3 w-full rounded-lg flex flex-col gap-5 relative">
          <label className="w-5 h-5 bg-rose-500 text-white absolute rounded-full flex justify-center items-center left-2 top-2">
            1
          </label>
          <div className="top-0 bottom-0 left-0 right-0 absolute flex justify-center items-center rounded-lg hover:bg-black/50 text-sm text-transparent hover:text-white transition duration-700 ease-in-out p-5">
            Open TikTok, YouTube, or Facebook and copy the video link
          </div>
          <img className="w-full h-full rounded-lg" src="/images/how01.jpg" loading="lazy" />
        </div>
        <div className="md:w-1/3 w-full rounded-lg flex flex-col gap-5 relative">
          <label className="w-5 h-5 bg-rose-500 text-white absolute rounded-full flex justify-center items-center left-2 top-2">
            2
          </label>
          <div className="top-0 bottom-0 left-0 right-0 absolute flex justify-center items-center rounded-lg hover:bg-black/50 text-sm text-transparent hover:text-white transition duration-700 ease-in-out p-5">
            Paste the link into the downloader input box..
          </div>
          <img className="w-full h-full rounded-lg" src="/images/how02.jpg" loading="lazy" />
        </div>
        <div className="md:w-1/3 w-full rounded-lg flex flex-col gap-5 relative">
          <label className="w-5 h-5 bg-rose-500 text-white absolute rounded-full flex justify-center items-center left-2 top-2">
            3
          </label>
          <div className="top-0 bottom-0 left-0 right-0 absolute flex justify-center items-center rounded-lg hover:bg-black/50 text-sm text-transparent hover:text-white transition duration-700 ease-in-out p-5">
            Click the Download button
          </div>
          <img className="w-full h-full rounded-lg" src="/images/how03.jpg" loading="lazy" />
        </div>
      </div>
      <NavBar
        textcolor01="text-white"
        textcolor02="text-white"
        textcolor03="text-gray-900"
        textcolor04="text-white"
        bgcolor01="bg-transparent"
        bgcolor02="bg-transparent"
        bgcolor03="bg-zinc-200"
        bgcolor04="bg-transparent"
      />
    </div>
  );
};

export default HowToUse;
