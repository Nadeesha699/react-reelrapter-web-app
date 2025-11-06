import { NavBar } from "../components/UiComponents";

const PrivacyPolicy = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-tr from-rose-300 via-gray-300 to-blue-300 flex flex-col justify-center items-center gap-10 p-5">
      <div className="backdrop-blur-md bg-white overflow-y-auto no-scrollbar h-3/4 lg:w-2/3 w-full p-5 rounded-lg text-gray-900 flex flex-col gap-5">
        <label className="bg-gradient-to-r from-rose-600 to-black text-transparent bg-clip-text font-bold text-5xl">
          Privacy<span className="text-gray-900"> Policy</span>
        </label>
        <p className="text-sm text-gray-500">
          At <strong className="font-bold text-rose-600">ReelRapter</strong>, we
          respect your privacy and are committed to protecting your personal
          data. This Privacy Policy explains how we handle information when you
          use our website and services.
        </p>

        <label className="text-xl text-gray-900 font-bold">
          1. Information We Collect
        </label>
        <p className="text-sm text-gray-500">
          ReelRapter does <strong>not</strong> collect, store, or require any
          personal information from users. The only data we temporarily process
          are the URLs you provide for downloading videos. This information is
          used solely to fetch the requested media and is not saved or logged
          after processing.
        </p>

        <label className="text-xl text-gray-900 font-bold">
          2. How We Use Your Data
        </label>
        <p className="text-sm text-gray-500">
          The URLs you input are used in real-time to retrieve downloadable
          links from supported platforms (e.g., TikTok, YouTube, Facebook). Once
          your download is complete, all temporary data is immediately
          discarded. We do not profile users or use any tracking technologies to
          monitor activity.
        </p>

        <label className="text-xl text-gray-900 font-bold">
          3. Cookies and Analytics
        </label>
        <p className="text-sm text-gray-500">
          ReelRapter does not use cookies, tracking pixels, or third-party
          analytics services. You can browse and use the app anonymously without
          any tracking identifiers.
        </p>

        <label className="text-xl text-gray-900 font-bold">
          4. Third-Party Services
        </label>
        <p className="text-sm text-gray-500">
          Our tool may connect to external video platforms for download
          requests. These third-party platforms have their own privacy policies
          and may collect data independently. We recommend reviewing their
          policies (e.g., YouTube, TikTok, Facebook) for more information.
        </p>

        <label className="text-xl text-gray-900 font-bold">
          5. Data Security
        </label>
        <p className="text-sm text-gray-500">
          We implement minimal, secure, and encrypted connections (HTTPS) to
          ensure safe communication between your browser and our servers. Since
          we do not store user data, there is no risk of data leaks from stored
          information.
        </p>

        <label className="text-xl text-gray-900 font-bold">
          6. Children’s Privacy
        </label>
        <p className="text-sm text-gray-500">
          ReelRapter is not designed for children under 13. We do not knowingly
          collect any information from minors. If you believe a child has
          provided data, please contact us so we can promptly remove it.
        </p>

        <label className="text-xl text-gray-900 font-bold">
          7. Policy Updates
        </label>
        <p className="text-sm text-gray-500">
          We may occasionally update this Privacy Policy to reflect new
          practices or legal requirements. The date of the latest revision will
          always be indicated at the top of this page.
        </p>

        <label className="text-xl text-gray-900 font-bold">8. Contact Us</label>
        <p className="text-sm text-gray-500">
          If you have any questions about this Privacy Policy, please contact us
          at{" "}
          <a
            href="mailto:nadeesharuwandima@gmail.com"
            className="text-blue-600 hover:underline font-bold"
          >
            nadeesharuwandima@gmail.com
          </a>
          .
        </p>

        <p className="text-sm text-gray-500 italic">
          Last updated: November 2025
        </p>
      </div>
      <NavBar
        textcolor01="text-white"
        textcolor02="text-white"
        textcolor03="text-white"
        textcolor04="text-gray-900"
        bgcolor01="bg-transparent"
        bgcolor02="bg-transparent"
        bgcolor03="bg-transparent"
        bgcolor04="bg-zinc-200"
      />
    </div>
  );
};

export default PrivacyPolicy;
