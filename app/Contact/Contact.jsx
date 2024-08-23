"use client";

import "./Contact.css";
import React, { useReducer, useState } from "react";

const initialState = {
  data: {
    fullName: "",
    postcode: "",
    house: "",
    city: "",
    phoneNumber: "",
    email: "",
  },
  loading: "editing",
  submitted: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "FIELD_CHANGE":
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.fieldName]: action.payload.fieldValue,
        },
      };
    default:
      return state;
    case "ERROR":
      return {
        ...state,
        loading: "error",
      };
    case "SUBMIT_STARTED":
      return {
        ...state,
        loading: true,
      };
    case "SUBMIT_SUCCESS":
      return {
        ...state,
        loading: false,
        submitted: true,
        successMessage: "Form submitted successfully!",
      };
  }
}

export function ContactUs() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  const [, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleInput(event) {
    dispatch({
      type: "FIELD_CHANGE",
      payload: {
        fieldName: event.target.name,
        fieldValue: event.target.value,
      },
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (
      state.data.fullName === "" ||
      state.data.postcode === "" ||
      state.data.house === "" ||
      state.data.city === "" ||
      state.data.phoneNumber === "" ||
      state.data.email === ""
    ) {
      dispatch({
        type: "ERROR",
      });
      if(state.loading) {
        return;
      }
    } else {
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
        dispatch({
          type: "SUBMIT_SUCCESS",
        });
      }, 2000 );

      setLoading(true);

      

      return;
    }
  }

  return (
    <>
    <div className="contactHeader">
      <h1 >Design Booking</h1></div>
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
            value={state.data.postcode}
          ></input>
          <label htmlFor="house">House/Flat Number & Street Name:</label> <br />
          <input
            type="text"
            id="house"
            name="house"
            onChange={handleInput}
            value={state.data.house}
          ></input>
          <label htmlFor="city">City:</label> <br />
          <input
            type="text"
            id="city"
            name="city"
            onChange={handleInput}
            value={state.data.city}
          ></input>
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
        {state.loading === "error" && <p className="errorMessage">Error! Please fill in all the fields</p>}
        {/* 
        {error && <p className="errorMessage">Please fill in all the fields</p>} */}
        {success && (
          <p className="successMessage">
            Thank you for your submission {state.data.fullName}. We will be in
            contact with you shortly.
          </p>
        )}
        

        <button
          className="submitButton"
          type="submit"
          name="button"
          id="buttonSubmit"
        >
          {state.submitted ? "Submitted": loading ? "Submitting..." : "Book design consultation" }
        </button>
      </form>
      
    </>
  );
}

export default ContactUs;
