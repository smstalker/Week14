// import React from "react";


// export default function Review({ review }) {
//     return (
//         <div>
//             {review.name}
//         </div>
//     )
// }

import React, { useState, useRef, useEffect } from "react";
import Stars from './stars'
import ReviewList from "./review-list";
import { v4 as uuidv4 } from 'uuid';

const localStorageKey = 'reviewApp.reviews';


function Review() {
    const [reviews, setReviews] = useState([]);
    const reviewRef = useRef();

  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem(localStorageKey))
    if (storedReviews) setReviews(storedReviews)
  }, []);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(reviews))
  }, [reviews]);

    function handleAddReview(e) {
        const rev = reviewRef.current.value
        if (rev === '') return
        setReviews(prevReviews => {
            return [...prevReviews, { id: uuidv4(), name: rev }]
        })
        console.log(rev);
        console.log(reviews);
        reviewRef.current.value = null
    }

    return (
        <div className="card w-75">

            <div className='card-header bg-dark text-white'>

                <Stars />
            </div>
            <div className="card-body">

                <input ref={reviewRef} type='text' placeholder='Leave a Review' />
                <button onClick={handleAddReview}> Post Review</button>
            </div>
            {/* <ReviewList reviews={reviews}/> */}
        </div>

    );

}

export default Review
