// import { useState } from "react";
import Card from "./shared/Card";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
function FeedbackItem({ item, handleDelete }) {
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

  return (
    <Card reverse="true">
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
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
