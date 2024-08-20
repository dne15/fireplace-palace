'use client'

import "./Contact.css";
import {useState} from 'react'

export function ContactUs() {

  function handleSubmit(event) {
    event.preventDefault();
    if (fullName === "" || postcode === "" || house === "" || city === "" || phoneNumber === "" || email === "") {
      console.log(" Please fill in all the fields");
    } else {
      alert(
        `Thank you for your submission ${fullName}. We will be in contact with you shortly`
      );
    }
  }

let [fullName, setFullName] = useState("")
let [postcode, setPostcode] = useState("")
let [house, setHouse] = useState("")
let [city, setCity] = useState("")
let [phoneNumber, setPhoneNumber] = useState("")
let [email, setEmail] = useState("")

function handleInput(event) {

  if (event.target.name === 'fullName'){
  setFullName(event.target.value)
  } if (event.target.name === 'postcode'){
    setPostcode(event.target.value)
    } if (event.target.name === 'houseNumber'){
      setHouse(event.target.value)
      } if (event.target.name === 'city'){
        setCity(event.target.value)
        } if (event.target.name === 'phoneNumber'){
          setPhoneNumber(event.target.value)
          } if (event.target.name === 'emailAddress'){
            setEmail(event.target.value)
            }
}
console.log(fullName)
console.log(postcode)
console.log(house)
console.log(city)
console.log(phoneNumber)
console.log(email)
  return (
    <>
      <h1 className="contactHeader">Design Booking</h1>
      <form>
        <fieldset className="personalInfo">
          <legend>Personal Information</legend>
          <label htmlFor="fullName">Full Name:</label> <br></br>
          <input type="text" id="fullName" name="fullName" onChange={(event) => handleInput(event)} value={fullName}/>
          <br />
          <label htmlFor="postcode">Postcode:</label>
          <br></br>
          <input type="text" id="postcode" name="postcode" onChange={(event) => handleInput(event)} value={postcode} />
          <br />
          <label htmlFor="houseNumber">
            House/Flat Number and Street Name:
          </label>
          <br></br>
          <input type="text" id="houseNumber" name="houseNumber" onChange={(event) => handleInput(event)} value={house} />
          <br></br>
          <label htmlFor="city">City:</label>
          <br></br>
          <input type="text" id="city" name="city" onChange={(event) => handleInput(event)} value={city} />
        </fieldset>
      </form>

      <form onSubmit={handleSubmit}>
        <fieldset className="contactInfo">
          <legend>Contact Information</legend>
          <label htmlFor="text">Phone Number:</label>
          <br></br>
          <input type="text" id="phoneNumber" name="phoneNumber" onChange={(event) => handleInput(event)} value={phoneNumber} />
          <br></br>

          <label htmlFor="text">Email Address:</label>
          <br></br>
          <input type="text" id="emailAddress" name="emailAddress"onChange={(event) => handleInput(event)} value={email} />
          <br></br>
        </fieldset>
        <button type="submit" name="button" id="buttonSubmit" >
          Request Design Consultation
        </button>
      </form>
    </>
  );
}


export default ContactUs;


