// import React from "react";


// export default function Review({ review }) {
//     return (
//         <div>
//             {review.name}
//         </div>
//     )
// }

import React from "react";
import Stars from './stars'


// let e = React.createElement;

export default class Review extends React.Component {
    render() {
        return(
            <div className="card w-75"> 
                <div className='card-header bg-dark text-white'>
                 
                <Stars />
                </div>
                <div className="card-body">
                
                <input type='text' placeholder='Leave a Review' />
                <button> Post Review</button>
                </div>
                
            </div>

        );

    }
}

