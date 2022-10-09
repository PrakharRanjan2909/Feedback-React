import { createContext } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  //children me saab component wrapped hoga

  const [isLoading, setisLoading] = useState(true);
  const [feedback, setFeedback] = useState([
    // {
    //   id: 1,
    //   text: "This item is from context",
    //   rating: 10,
    // },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    //feedbackEdit is the item ans the id i.e the data collected while editing thye form card
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const response = await fetch(
      `http://localhost:4000/feedback?_sort=id&_order=desc`
    );
    const data = await response.json();
    setFeedback(data);
    setisLoading(false);
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
    //return only that array whose id not selected
  };
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;
