export function Card({ img, h4, p }) {
 
 //assiging props to components

  return (
    <div>
      <img src={img} alt={h4} />
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
          img="../images/how-it-works-1.png"
          h4="Give us a call..."
          p="Call us and book in a 'design consultation' on a date and time to suit you."
        />
      </section>
      <section>
        <Card
          img="../images/how-it-works-2.png"
          h4="We come to you ..."
          p="We come to your home to do an assessment of the space and to your style preference."
        />
      </section>
      <section>
        <Card
          img="../images/how-it-works-3.png"
          h4="We recommend"
          p="We send you a bespoke set of fireplace recommendations."
        />
      </section>
    </div>
  );
}

export default HowItWorks;
