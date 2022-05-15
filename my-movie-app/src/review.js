import React, { useState, useRef, useEffect } from "react";
import Stars from './stars'
import { v4 as uuidv4 } from 'uuid';

const localStorageKey = 'movieApp.reviews';


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
        const name = reviewRef.current.value
        if (name === '') return
        setReviews(prevReviews => {
            return [...prevReviews, { id: uuidv4(), name: name }]

        })
        console.log(name);
        console.log(reviews);
        reviewRef.current.value = null
    }

    return (
        <div className="card">

            <div className='card-header'>

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

