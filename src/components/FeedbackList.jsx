import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import FeedbackItem from "./FeedbackItem";
// import PropTypes from "prop-types";

// import { useContext } from "react";
// import FeedbackContext from "../context/FeedbackContext";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

import Spinner from "./shared/Spinner";

// function FeedbackList({ feedback, handleDelete }) {
function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);
  const { isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>NO Feedback yet</p>;
  }

  return isLoading ? (
    // <h3>LOADing.....</h3>
    <Spinner />
  ) : (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layout
          >
            <FeedbackItem
              key={item.id}
              item={item}
              // handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

// FeedbackList.propTypes = {
//   feedback: PropTypes.array0f(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//     })
//   ),
// };

export default FeedbackList;
