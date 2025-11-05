import Link from "next/link";
import { LuHouse, LuScale, LuShieldCheck } from "react-icons/lu";
import { MdQuiz } from "react-icons/md";

const Terms = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-tr from-rose-200 via-gray-200 to-blue-200 flex flex-col justify-center items-center gap-10 p-5">
      <div className="backdrop-blur-md bg-white overflow-y-auto no-scrollbar h-2/3 w-2/3 p-5 rounded-lg text-gray-900 flex flex-col gap-5">
         <label className="text-rose-600 font-bold text-5xl">
          Terms<span className="text-gray-900"> & conditions</span>
        </label>
        <p className="text-sm text-gray-500">
          Welcome to <strong className="font-bold text-rose-600">ReelRapter</strong>. By accessing or using our
          website or services, you agree to be bound by these Terms and
          Conditions. Please read them carefully before using our platform.
        </p>

        <label className="text-xl text-gray-900 font-bold">1. Service Overview</label>
        <p className="text-sm text-gray-500">
          ReelRapter is an independent online tool designed to help users
          download publicly available videos from supported platforms such as
          TikTok, YouTube, and Facebook. We are not affiliated with, endorsed,
          or sponsored by these platforms.
        </p>

        <label className="text-xl text-gray-900 font-bold">2. User Responsibility</label>
        <p className="text-sm text-gray-500">
          You agree to use ReelRapter only for lawful purposes. Users are solely
          responsible for ensuring that the content they download is not
          protected by copyright, and that they have the right or permission to
          download and store such material.
        </p>

        <label className="text-xl text-gray-900 font-bold">3. Copyright & Fair Use</label>
        <p className="text-sm text-gray-500">
          We respect intellectual property rights. Downloading copyrighted
          materials without authorization may violate the laws of your country
          and the terms of the source platform. ReelRapter does not host or
          store any user-downloaded content on its servers.
        </p>

        <label className="text-xl text-gray-900 font-bold">4. Limitations of Liability</label>
        <p className="text-sm text-gray-500">
          This service is provided <em>"as is"</em> and without any warranties,
          expressed or implied. ReelRapter and its developers are not
          responsible for data loss, misuse, or any damages arising from use or
          inability to use this service.
        </p>

        <label className="text-xl text-gray-900 font-bold">5. Prohibited Activities</label>
        <ul className="list-disc list-inside text-sm text-gray-500">
          <li>
            Downloading private or restricted content without authorization
          </li>
          <li>Using ReelRapter for commercial distribution of videos</li>
          <li>Attempting to modify, reverse-engineer, or exploit the system</li>
        </ul>

        <label className="text-xl text-gray-900 font-bold">6. Updates to Terms</label>
        <p className="text-sm text-gray-500">
          These Terms may be updated periodically. Continued use of ReelRapter
          after updates are posted signifies your acceptance of the revised
          Terms and Conditions.
        </p>

        <label className="text-xl text-gray-900 font-bold">7. Contact</label>
        <p className="text-sm text-gray-500">
          If you have any questions or concerns regarding these Terms, please
          contact our support team at{" "}
          <a
            href="mailto:nadeesharuwandima@gmail.com"
            className="text-blue-600 hover:underline font-bold"
          >
             nadeesharuwandima@gmail.com
          </a>
          .
        </p>
      </div>
      <div className="bg-red-600/50 rounded-full w-1/2 flex flex-row justify-between items-center fixed bottom-5">
        <Link
          href="/"
          className="flex flex-row gap-2 justify-center items-center p-5 rounded-full w-1/4 hover:bg-red-300 hover:text-gray-900 transition duration-700 ease-in-out"
        >
          <LuHouse /> Home
        </Link>
        <Link
          href="/terms"
          className="flex flex-row gap-2 justify-center items-center text-gray-900 text-sm bg-zinc-300 text-sm w-1/4 p-5 rounded-full "
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
          className="flex flex-row gap-2 justify-center items-center text-white text-sm w-1/4 p-5 rounded-full hover:bg-red-300 hover:text-gray-900 transition duration-700 ease-in-out"
        >
          <LuShieldCheck /> Privacy policy
        </Link>
      </div>
    </div>
  );
};

export default Terms;
