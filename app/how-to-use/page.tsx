import Link from "next/link";
import { LuHouse, LuScale, LuShieldCheck } from "react-icons/lu";
import { MdQuiz } from "react-icons/md";

const HowToUse = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-tr from-rose-200 via-gray-200 to-blue-200 flex flex-col justify-center items-center gap-10 p-5">
      <div className="flex flex-row w-2/3 gap-5">
        <div className="w-1/3 h-2/3 rounded-lg bg-white flex flex-col gap-5 relative">
        <label className="w-10 h-10 bg-rose-500 text-white absolute rounded-full flex justify-center items-center left-2 top-2">1</label>
          <img className="w-full h-3/4 rounded-t-lg" src='/how01.jpg'/>
          <label className="text-sm text-gray-500 text-center pl-5 pr-5">Open TikTok, YouTube, or Facebook and copy the video link.</label>
        </div>
         <div className="w-1/3 h-2/3 rounded-lg bg-white flex flex-col gap-5 relative">
        <label className="w-10 h-10 bg-rose-500 text-white absolute rounded-full flex justify-center items-center left-2 top-2">2</label>
          <img className="w-full h-3/4 rounded-t-lg" src='/how02.jpg'/>
          <label className="text-sm text-gray-500 text-center pl-5 pr-5">Paste the link into the downloader input box..</label>
        </div>
         <div className="w-1/3 h-2/3 rounded-lg bg-white flex flex-col gap-5 relative">
        <label className="w-10 h-10 bg-rose-500 text-white absolute rounded-full flex justify-center items-center left-2 top-2">3</label>
          <img className="w-full h-3/4 rounded-t-lg" src='/how03.jpg'/>
          <label className="text-sm text-gray-500 text-center pl-5 pr-5pl-5 pr-5">Click the <b>Download</b> button</label>
        </div>
        
      </div>
      <div className="bg-red-600/50 rounded-full w-1/2 flex flex-row justify-between items-center fixed bottom-5">
        <Link
          href="/"
          className="flex flex-row gap-2 justify-center items-center p-5 rounded-full w-1/4 hover:text-gray-900 transition duration-700 ease-in-out"
        >
          <LuHouse /> Home
        </Link>
        <Link
          href="/terms"
          className="flex flex-row gap-2 justify-center items-center text-white text-sm w-1/4 p-5 rounded-full hover:bg-red-300 hover:text-gray-900 transition duration-700 ease-in-out "
        >
          <LuScale /> Terms
        </Link>
        <Link
          href="/how-to-use"
          className="flex flex-row gap-2 justify-center items-center text-gray-900 text-sm bg-zinc-300 text-sm w-1/4 p-5 rounded-full hover:bg-red-300"
        >
          <MdQuiz /> How to use
        </Link>
        <Link
          href="/privacy-policy"
          className="flex flex-row gap-2 justify-center items-center text-white text-sm w-1/4 p-5 rounded-full hover:bg-red-300 hover:text-gray-900 transition duration-700 ease-in-out"
        >
          <LuShieldCheck /> Privacy policy
        </Link>
      </div>
    </div>
  );
};

export default HowToUse;
