import Link from 'next/link';
export function BookConsBox() {
    return (
        <section className="bookConsultationBox">
        <h2>
          Discover the <br />
          Perfect Fireplace ...
        </h2>
        <div>
          <Link href="/Contact" className="bookConsultationText">Book consultation</Link>
        </div>
      </section>
    )
}