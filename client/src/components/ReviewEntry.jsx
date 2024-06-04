import React from 'react';
const {useState} = React;

const ReviewEntry = ({review, handleDelete, handleUpdate}) => {
  const [clicked, setClicked] = useState(false);
  const [text, setText] = useState("Update");
  const [comment, setComment] = useState(review.comment);
  const [rating, setRating] = useState(review.rating);

  const onchange = (e, callback) => {
    callback(e.target.value);
  }


  const deleteClkHandler = () => {
    handleDelete(review.name);
  }

  const updateClkHandler = ()=>{
    if(text === "Update") {
      setClicked(!clicked);
      setText('Submit');
    } else {
      handleUpdate(review.name, comment, rating);
      setClicked(!clicked);
      setText('Update');
    }

  }

  return (
    <div>
      <div><label>Name: {review.name}</label></div>
      { clicked ?
        <div>
        <div>
          <label>Comment: <input type='textarea' maxLength="250" value={comment} onChange={(e) => {onchange(e, setComment)}}></input></label>
        </div>
        <fieldset>
          <legend>Select a rating</legend>
          <input type="radio" name="rating" id="id1" value="1" onChange={(e) => {onchange(e, setRating)}}/>
          <label for="id1">1</label>
          <input type="radio" name="rating" id="id2" value="2" onChange={(e) => {onchange(e, setRating)}}/>
          <label for="id2">2</label>
          <input type="radio" name="rating" id="id3" value="3" onChange={(e) => {onchange(e, setRating)}}/>
          <label for="id3">3</label>
          <input type="radio" name="rating" id="id4" value="4" onChange={(e) => {onchange(e, setRating)}}/>
          <label for="id4">4</label>
          <input type="radio" name="rating" id="id5" value="5" onChange={(e) => {onchange(e, setRating)}}/>
          <label for="id5">5</label>
        </fieldset>
        </div> :
        <div>
          <div><label>Comment: {comment}</label></div>
          <div><label>Rating: {rating}</label></div>
        </div>
      }



      <button type="button" onClick={updateClkHandler}>{text}</button>
      <button type='button' onClick={deleteClkHandler}>Delete</button>
      <br/>
    </div>
  )
}
export default ReviewEntry;