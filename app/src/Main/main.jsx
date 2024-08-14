export function Main() {
  return (
<main>
      <figure>
        <img src="../images/hero-mobile.png" />
      </figure>
      <section className="bookConsultationBox">
        <h2>Discover the <br/> Perfect Fireplace ...</h2>
        <div>
          <span className="bookConsultationText">Book consultation:</span>
          <span className="phoneNumber">0121 345 6789</span>
        </div>
      </section>
      
      <div className="howItWorks">
        <h3>How it works.</h3>
        <section>
          <figure className="smallImages"><img src="../images/how-it-works-1.png" /></figure>
          <h4>Give us a call...</h4>
          <p>Call us and book in a "design conultation" on a date and time to suit you.</p>
        </section>
        <section>
          <figure className="smallImages"><img src="../images/how-it-works-2.png"/></figure>
          <h4>We come to you ...</h4>
          <p>We come to your home to do an assessment of the space and to your style preference.</p>
        </section>
        <section>
          <figure className="smallImages"><img src="../images/how-it-works-3.png"/></figure>
          <h4>We recommend</h4>
          <p>We send you a bespoke set of fireplace recomendations</p>
        </section>
      </div>
    </main>
  )
}