import { FoundersData } from "./FoundersCard";
import "./Founders.css";
import Image from 'next/image';


export default function FoundersPage() {
  return (
    <main className="main">
      <section className="orangeBox">
        <h1 className="orangeTitle">Meet the artisans <br></br>behind our masterpieces!</h1>
        <h2 className ="orangeTitleName">Mike and Mandy</h2>
        <figure>
          <Image src="../images/founder-mike-and-mandy.png" alt="founders image"/>
        </figure>
      </section>
      <FoundersData />
    </main>
  );
}
