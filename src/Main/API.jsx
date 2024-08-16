'use client'

import { useState, useEffect } from "react"

export function Reviews() {

    let [selectedCountry, createDisplayReview] = useState(null)
    let [reviewData, setReviewData] = useState(null)
    
    console.log(reviewData)

    useEffect ( () => {
        if (selectedCountry){
            fetch(`https://seal-app-336e8.ondigitalocean.app/reviews?country=${selectedCountry}`)
            .then(response => response.json)
            .then(data => setReviewData(data))
        }

    }, [selectedCountry] )
    function displayReview(country) {
        createDisplayReview(country)
    }
return (
    <>
<button onClick={() => displayReview("England")}className="England">England</button>
<button onClick={() => displayReview("Wales")} className="Wales">Wales</button>
<button onClick={() => displayReview("Scotland")} className="Scotland">Scotland</button>
{json.stringify(reviewData)}
</>
)
}

// 3 buttons
// onClick
// renders everytime the button is changed 
// 