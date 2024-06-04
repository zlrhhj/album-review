import React from "react";
import ReviewEntry from "./ReviewEntry.jsx";

const ReviewList = ({reviews, handleDelete, handleUpdate}) => {

  return (
    <div>
    {
      reviews.map((review) => {
        return (<ReviewEntry review={review} handleDelete={handleDelete} handleUpdate={handleUpdate}/>)
      })
    }
    </div>

  )
}

export default ReviewList;