export function FounderCard({ header, description, image, altDescription }) {
  return (
    <div>
      <h3>{header}</h3>
      <p>{description}</p>
      <figure>
        <img src={image} alt={altDescription} />
      </figure>
    </div>
  );
}

export function FoundersData() {
  return (
    <div className="foundersCard">
      <section>
        <FounderCard
          image="../images/founders-1.png"
          header="Our craftsmanship"
          description="Mike and Mandy studied and honed their cradt under the fireplace
          sensei Vik Von Blaze. Nothing gets delivered to a customer without
          their sign off."
          altDescription="man building a fireplace"
        />
      </section>
      <section>
        <FounderCard
          image="../images/founders-2.png"
          header="Our experience"
          description="Number don't lie - we've been around for 20+ years and have a long
            list of happy customers who gladly recommend us."
          altDescription="close up of a tool"
        />
      </section>
      <section>
        <FounderCard
          image="../images/founders-3.png"
          header="Our guarantee"
          description=" If you're not 100% satisfied we will fully refund your purchase.
            Also, we offer free repairs for the first 20 years of ownership.
            Find that somewhere else!"
          altDescription="an image of sanding machine"
        />
      </section>
    </div>
  );
}

export default FoundersData;
