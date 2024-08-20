import "./Contact.css";

export function ContactUs() {
  return (
    <>
      <h1 className="contactHeader">Design Booking</h1>
      <form>
        <fieldset className="personalInfo">
          <legend>Personal Information</legend>
          <label HTMLfor="fullName">Full Name:</label> <br></br>
          <input type="text" id="fullName" name="fullName" />
          <br />
          <label HTMLfor="postcode">Postcode:</label>
          <br></br>
          <input type="text" id="postcode" name="postcode" />
          <br />
          <label HTMLfor="houseNumber">
            House/Flat Number and Street Name:
          </label>
          <br></br>
          <input type="text" id="houseNumber" name="houseNumber" />
          <br></br>
          <label HTMLfor="city">City:</label>
          <br></br>
          <input type="text" id="city" name="city" />
        </fieldset>
      </form>

      <form>
        <fieldset className="contactInfo">
          <legend>Contact Information</legend>
          <label HTMLfor="text">Phone Number:</label>
          <br></br>
          <input type="text" id="phoneNumber" name="phoneNumber" />
          <br></br>

          <label HTMLfor="text">Email Address:</label>
          <br></br>
          <input type="text" id="emailAddress" name="emailAddress" />
          <br></br>
        </fieldset>
        <button type="submit" name="button" id="buttonSubmit">
          Request Design Consultation
        </button>
      </form>
    </>
  );
}

export default ContactUs;
