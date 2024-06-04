import React from "react";
const {useState, useEffect} = React;
import AddReview from "./AddReview.jsx";
import ReviewList from "./ReviewList.jsx";
import axios from 'axios';
const App = ()=>{
  const [clicked, setClicked] = useState(false);
  const [reviewList, setReviewList] = useState([]);

  const getAllReviews = () => {

    axios.get('/reviews')
    .then((results) => {
      console.log('ReviewList is: ', results);
      setReviewList(results.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }
  const submitHandler = (name, comment, rating) => {
    var data = {};
    data.name = name;
    data.comment = comment;
    data.rating = rating;
    axios.post('/reviews', data)
    .then((response)=> {
      console.log("successfully saved a review");
      getAllReviews();
      setClicked(!clicked);
    })
    .catch((err) => {
      console.log(err);
    })
  }
  const onclick = () => {
    setClicked(!clicked);
  }

  const deleteHandler = (name) => {
    //const params = {"name": name};
    axios.delete("/reviews", {params:{"name":name}})
    .then((response) => {
      getAllReviews()
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  const updateHandler = (name, comment, rating) => {
    axios.patch('/reviews',{"name": name, "comment": comment, "rating":rating})
    .then((response) => {
      console.log(response);
      getAllReviews
    })
    .catch((err) => {
      console.log(err);
    })
  }
  useEffect(()=>{
    getAllReviews();
  }, []);

  return(
    <div>
      <h1>Reviewed Albums</h1>
      <ReviewList reviews={reviewList} handleDelete={deleteHandler} handleUpdate={updateHandler}/>
      <hr/>
      {clicked ? <AddReview handleSubmit={submitHandler}/> : <button type="button" onClick={onclick}>Add </button>}
    </div>
  )
}
export default App;