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
    <h3 className="trustedHeader">Trusted.</h3>
    <p className="reviewParagrapgh">We've got thousands of happy customers all over the UK. Choose your country to see the latest review:</p>
    <div className="reviewButtons"> 
    <button onClick={() => displayReview("England")}className="england">England</button>
    <button onClick={() => displayReview("Wales")} className="wales">Wales</button>
    <button onClick={() => displayReview("Scotland")} className="scotland">Scotland</button>
    </div>
    <div className="reviewText">
        {reviewData ? JSON.stringify(reviewData.text) : null}
    </div>
    <div className="authorLocation">
        {reviewData ? reviewData.author : null}
        <br></br>
        {reviewData ? reviewData.location : null}
    </div>
</>
)
}

// 3 buttons
// onClick
// renders everytime the button is changed 
// 