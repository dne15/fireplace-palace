import Link from "next/link";
import "./page.css";
import { BookConsBox } from "@/src/Main/BookConsBox";
import { Heroimg } from "@/src/Main/Heroimg";
import { HowItWorks } from "@/src/Main/Card";

export function Page() {
  return <Link href="/dashboard">Dashboard</Link>;
}

export default function Home() {
  return (
    <main className="main">
      <Heroimg />
      <BookConsBox />
      <HowItWorks />
    </main>
  );
}
