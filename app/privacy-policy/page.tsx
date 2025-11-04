import Link from "next/link";
import { LuHouse, LuScale, LuShieldCheck } from "react-icons/lu";
import { MdQuiz } from "react-icons/md";

const PrivacyPolicy = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-tr from-rose-200 via-gray-200 to-blue-200 flex flex-col justify-center items-center gap-10 p-5">
      <div className="bg-red-600/50 rounded-full w-1/2 flex flex-row justify-between items-center gap-2 fixed bottom-5">
        <Link
          href="/"
          className="flex flex-row gap-2 justify-center items-center p-5 rounded-full w-1/4 hover:bg-red-300 hover:text-gray-900 transition duration-700 ease-in-out"
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
          className="flex flex-row gap-2 justify-center items-center text-white text-sm w-1/4 p-5 rounded-full hover:bg-red-300 hover:text-gray-900 transition duration-700 ease-in-out"
        >
          <MdQuiz /> How to use
        </Link>
        <Link
          href="/privacy-policy"
          className="flex flex-row gap-2 justify-center items-center text-gray-900 text-sm bg-zinc-300 text-sm w-1/4 p-5 rounded-full"
        >
          <LuShieldCheck /> Privacy policy
        </Link>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
