// import { useState } from "react";
import Card from "./shared/Card";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";

import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

// function FeedbackItem({ item, handleDelete }) {
function FeedbackItem({ item }) {
  //   const [rating, setRating] = useState(7); //destructuring of array
  //   const [text, setText] = useState("This is feddback example");
  //   const handleClick = () => {
  //     setRating((prev) => {
  //       return prev + 1;
  //     });
  //   };

  //   const handleClick = (id) => {
  //     console.log(id);
  //   };

  const { deleteFeedback } = useContext(FeedbackContext);

  return (
    <Card reverse="true">
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        {/* <button onClick={() => handleDelete(item.id)} className="close"></button> */}
        <FaTimes color="purple" />
      </button>
    </Card>
    //     <>
    //     <Card />
    //     <div className="num-display">{item.rating}</div>
    //     <div className="text-display">{item.text}</div>
    //   </>
    // <div className="card">
    //   <div className="num-display">{item.rating}</div>
    //   <div className="text-display">{item.text}</div>
    //   {/* <button onClick={handleClick}>Click</button> */}
    // </div>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
