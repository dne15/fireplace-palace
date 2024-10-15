import Image from 'next/image';

export function Card({ img, h4, p, width, height }) {
  return (
    <div className="card">
      <Image 
        src={img} 
        alt={h4} 
        width={width} 
        height={height}
      />
      <h4>{h4}</h4>
      <p>{p}</p>
    </div>
  );
}

export function HowItWorks() {
  return (
    <div className="howItWorks">
      <h3>How it works.</h3>
      <section>
        <Card
          img="/images/how-it-works-1.png"
          h4="Give us a call..."
          p="Call us and book in a 'design consultation' on a date and time to suit you."
          width={300}  // Replace with your desired width
          height={200} // Replace with your desired height
        />
      </section>
      <section>
        <Card
          img="/images/how-it-works-2.png"
          h4="We come to you ..."
          p="We come to your home to do an assessment of the space and to your style preference."
          width={300}  // Replace with your desired width
          height={200} // Replace with your desired height
        />
      </section>
      <section>
        <Card
          img="/images/how-it-works-3.png"
          h4="We recommend"
          p="We send you a bespoke set of fireplace recommendations."
          width={300}  // Replace with your desired width
          height={200} // Replace with your desired height
        />
      </section>
    </div>
  );
}

export default HowItWorks;
