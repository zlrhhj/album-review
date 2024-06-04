import React from "react";
const {useState} = React;

const AddReview = ({handleSubmit}) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("");

  const onchange = (e, callback) => {
    callback(e.target.value);
  }

  const submitClickHandler = () => {
    handleSubmit(name, comment, rating);
    setName("");
    setComment("");
    setRating("");
  }
  return(
    <div>
      <div>
        <label>Album Name: <input type='text' value={name} onChange={(e) => {onchange(e, setName)}}></input></label>
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
      </fieldset></div>

      <button type="submit" onClick={submitClickHandler}>Submit</button>

    </div>
  )
}

export default AddReview;