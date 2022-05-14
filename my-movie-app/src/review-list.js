import React from "react";
import Review from "./review";


export default function ReviewList({reviews}) {
    return (
        
          reviews.map(review => {
              return <div><Review key={review.id} review={review} /> </div>
          })
                
        
        
    )
}