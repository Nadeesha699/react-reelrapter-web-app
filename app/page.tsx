import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen bg-yellow-500">
      <nav>
        <Link href="/TermsAndConditions">Terms And Condtions</Link>
      </nav>
    </div>
  );
}
