"use client";

import "./Contact.css";
import React, { useReducer, useState } from 'react';

const initialState = {
  data: {
    fullName: "",
    postcode: "",
    house: "",
    city: "",
    phoneNumber: "",
    email: ""
  },
  error: false
};

function reducer(state, action) {
  switch (action.type) {
    case "FIELD_CHANGE":
      return {
        data: {
          ...state.data,
          [action.payload.fieldName]: action.payload.fieldValue
        },
        error: state.error
      };
    default:
      return state;
      case "SUBMIT_STARTED":
        return {
            ...state,
            loading: true,
        };
    case "SUBMIT_SUCCESS":
        return {
            ...state,
            loading: false,
            successMessage: "Form submitted successfully!",
        };
        
  }
}

export function ContactUs() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state)
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleInput(event) {
      dispatch({
        type: "FIELD_CHANGE",
        payload: {
          fieldName: event.target.name,
          fieldValue: event.target.value
        }
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (state.data.fullName === "" || state.data.postcode === "" || state.data.house === "" || state.data.city === "" || state.data.phoneNumber === "" || state.data.email === "") {
      setError(true);
      setSuccess(false);
    } else {
      setError(false);
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
      }, 2000); // 2 seconds delay
    }
  }

  return (
    <>
      <h1 className="contactHeader">Design Booking</h1>
      <form onSubmit={handleSubmit}>
        <fieldset className="personalInfo">
          <legend>Personal Information</legend>
          <label htmlFor="fullName">Full Name:</label> <br />
          <input
            type="text"
            id="fullName"
            name="fullName"
            onChange={handleInput}
            value={state.data.fullName}
            
          />
          <label htmlFor="postcode">Postcode:</label> <br />
          <input
            type="text"
            id="postcode"
            name="postcode"
            onChange={handleInput}
            value={state.data.postcode}></input>
          <label htmlFor="house">House/Flat Number & Street Name:</label> <br />
          <input
            type="text"
            id="house"
            name="house"
            onChange={handleInput}
            value={state.data.house}></input>
            <label htmlFor="city">City:</label> <br />
          <input
            type="text"
            id="city"
            name="city"
            onChange={handleInput}
            value={state.data.city}></input>
        </fieldset>

        <fieldset className="contactInfo">
          <legend>Contact Information</legend>
          <label htmlFor="text">Phone Number:</label>
          <br></br>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            onChange={handleInput}
            value={state.data.phoneNumber}
          />
          <br></br>

          <label htmlFor="text">Email Address:</label>
          <br></br>
          <input
            type="text"
            id="email"
            name="email"
            onChange={handleInput}
            value={state.data.email}
          />
        </fieldset>

        {error && <p className="errorMessage">Please fill in all the fields</p>}
        {success && (
          <p className="successMessage">
            Thank you for your submission {state.data.fullName}. We will be in contact with
            you shortly.
          </p>
        )}
        {loading && <p>Submitting form...</p>}

        <button
          className="submitButton"
          type="submit"
          name="button"
          id="buttonSubmit"
        >
          Request Design Consultation
        </button>
      </form>
    </>
  );
}

export default ContactUs;
