import Link from "next/link";

export default function FoundersPage() {
  return (
    <main className="main">
      <section className="orangeBox">
        <h1>Meet the artisans behind our masterpieces!</h1>
        <h2>Mike and Mandy</h2>
        <figure></figure>
      </section>

      <section>
        <h3>Our craftsmanship</h3>
        <p>
          Mike and Mandy studied and honed their cradt under the fireplace
          sensei Vik Von Blaze. Nothing gets delivered to a customer without
          their sign off.
        </p>
        <figure></figure>
      </section>
      <div className="foundersColumn">
        <section>
          <h3>Our experience</h3>
          <p>
            Number don't lie - we've been around for 20+ years and have a long
            list of happy customers who gladly recommend us.
          </p>
          <figure></figure>
        </section>

        <section>
          <h3>Our guarantee</h3>
          <p>
            If you're not 100% satisfied we will fully refund your purchase.
            Also, we offer free repairs for the first 20 years of ownership.
            Find that somewhere else!
          </p>
          <figure></figure>
        </section>
      </div>
    </main>
  );
}
