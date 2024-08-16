'use client'

import { useState, useEffect } from "react"

export function Reviews() {

    let [selectedCountry, createDisplayReview] = useState(null)
    let [reviewData, setReviewData] = useState(null)
    

    useEffect ( () => {
        if (selectedCountry){
            fetch(`https://seal-app-336e8.ondigitalocean.app/reviews?country=${selectedCountry}`)
            .then(response => response.json())
            .then(data => setReviewData(data))
        }

    
    
    }, [selectedCountry] )
    function displayReview(country) {
        createDisplayReview(country)
    }
return (
    <>
    <div className="reviewButtons"> 
    <button onClick={() => displayReview("England")}className="England">England</button>
    <button onClick={() => displayReview("Wales")} className="Wales">Wales</button>
    <button onClick={() => displayReview("Scotland")} className="Scotland">Scotland</button>
</div>
<div className="reviewText">
    {reviewData ? JSON.stringify(reviewData.text) : null}
</div>
</>
)
}

// 3 buttons
// onClick
// renders everytime the button is changed 
// 