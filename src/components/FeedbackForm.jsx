import React, { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

import { useContext } from "react";

import { useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";

// function FeedbackForm({ handleAdd }) {
function FeedbackForm() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const { addFeedback } = useContext(FeedbackContext);
  const { feedbackEdit } = useContext(FeedbackContext);
  const { updateFeedback } = useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Type more");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedBack = {
        text: text,
        rating: rating,
      };
      // handleAdd(newFeedBack);
      if (feedbackEdit.edit == true) {
        updateFeedback(feedbackEdit.item.id, newFeedBack);
      } else {
        addFeedback(newFeedBack);
      }
      setText("");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <RatingSelect
          select={(rating) => {
            setRating(rating);
            console.log(rating);
          }}
        />
        <h2>Write the review</h2>
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
