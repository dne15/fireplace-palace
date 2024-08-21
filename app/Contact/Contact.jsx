"use client";

import "./Contact.css";
// import { useState , useReducer } from "react";

// export function ContactUs() {
//   function handleSubmit(event) {
//     event.preventDefault();
//     if (fullName === "" ) {
//       setError(true);
//       setSuccess(false);
//     } else {
//       setError(false);
//       setSuccess(true);
//     }
//   }
//   let [error, setError] = useState();
//   let [success, setSuccess] = useState();
//   // let [fullName, setFullName] = useState("");
//   let [ state , dispatch] = useReducer(reducer , initalState)

//   function handleInput(event) {
//     if (event.target.name === "fullName") {
//       setFullName(event.target.value);
//     }
//   }

//   let initalState = {
//     data: {
//        fullName: ""
//     },
//     error: false
//   }

//   function reducer(state, action){
//     switch(action.type) {
//       case  "ALL_CAPS":
//         return {
//             data: {
//           ...state.data,
//           [action.payload.fieldName]: action.payload.fieldValue
//         },
//         error: state.error
//     };
//       default: return state;
    
  
//     }
  

//   console.log(fullName);

//   return (
//     <>
//       <h1 className="contactHeader">Design Booking</h1>
//       <form>
//         <fieldset className="personalInfo">
//           <legend>Personal Information</legend>
//           <label htmlFor="fullName">Full Name:</label> <br></br>
//           <input
//             type="text"
//             id="fullName"
//             name="fullName"
//             onChange={(event) => handleInput(event)}
//             value={fullName}
//           />
//         </fieldset>
//       </form>

//       <form onSubmit={handleSubmit}>
//         <fieldset className="contactInfo">
//         </fieldset>

//         {error && <p className="errorMessage">Please fill in all the fields</p>}
//         {success && (
//           <p className="successMessage">
//             Thank you for your submission {fullName}. We will be in contact with
//             you shortly
//           </p>
//         )}

//         <button
//           className="submitButton"
//           type="submit"
//           name="button"
//           id="buttonSubmit"
//         >
//           Request Design Consultation
//         </button>
//       </form>
//     </>
//   );
// }

// export default ContactUs

import React, { useReducer, useState } from 'react';

const initialState = {
  data: {
    fullName: ""
  },
  error: false
};

function reducer(state, action) {
  switch (action.type) {
    case "ALL_CAPS":
      return {
        data: {
          ...state.data,
          [action.payload.fieldName]: action.payload.fieldValue
        },
        error: state.error
      };
    default:
      return state;
  }
}

export function ContactUs() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state)
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleInput(event) {
    if (event.target.name === "fullName") {
      dispatch({
        type: "ALL_CAPS",
        payload: {
          fieldName: event.target.name,
          fieldValue: event.target.value
        }
      });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (state.data.fullName === "") {
      setError(true);
      setSuccess(false);
    } else {
      setError(false);
      setSuccess(true);
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
        </fieldset>

        <fieldset className="contactInfo">
        </fieldset>

        {error && <p className="errorMessage">Please fill in all the fields</p>}
        {success && (
          <p className="successMessage">
            Thank you for your submission {state.data.fullName}. We will be in contact with
            you shortly.
          </p>
        )}

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
