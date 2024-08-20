import Link from "next/link";
import { BookConsBox } from "@/src/Main/BookConsBox";
import { Heroimg } from "@/src/Main/Heroimg";
import { HowItWorks } from "@/src/Main/Card";
import { Reviews } from "@/src/Main/API.jsx";

export default function Home() {
  return (
    <main className="main">
      <Heroimg />
      <BookConsBox />
      <Reviews />
      <HowItWorks />
    </main>
  );
}
