import Image from 'next/image';

export function FounderCard({ header, description, image, altDescription, width, height }) {
  return (
    <div>
      <h3>{header}</h3>
      <p>{description}</p>
      <figure>
        <Image src={image} alt={altDescription} width={width} height={height} />
      </figure>
    </div>
  );
}

export function FoundersData() {
  return (
    <div className="foundersCard">
      <section>
        <FounderCard
          image="/images/founders-1.png"
          header="Our craftsmanship"
          description="Mike and Mandy studied and honed their craft under the fireplace
          sensei Vik Von Blaze. Nothing gets delivered to a customer without
          their sign off."
          altDescription="man building a fireplace"
          width={400}
          height={300}
        />
      </section>
      <section>
        <FounderCard
          image="/images/founders-2.png"
          header="Our experience"
          description="Numbers don't lie - we've been around for 20+ years and have a long
            list of happy customers who gladly recommend us."
          altDescription="close up of a tool"
          width={400}
          height={300}
        />
      </section>
      <section>
        <FounderCard
          image="/images/founders-3.png"
          header="Our guarantee"
          description="If you're not 100% satisfied we will fully refund your purchase.
            Also, we offer free repairs for the first 20 years of ownership.
            Find that somewhere else!"
          altDescription="an image of sanding machine"
          width={400}
          height={300}
        />
      </section>
    </div>
  );
}

export default FoundersData;
