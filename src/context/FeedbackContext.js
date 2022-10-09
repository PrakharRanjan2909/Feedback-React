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

  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await fetch(`http://localhost:4000/feedback/${id}`, { method: "DELETE" });
      setFeedback(feedback.filter((item) => item.id !== id));
    }
    //return only that array whose id not selected
  };
  const addFeedback = async (newFeedback) => {
    const response = await fetch("http://localhost:4000/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();
    // newFeedback.id = uuidv4();
    setFeedback([data, ...feedback]);
  };
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };
  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`http://localhost:4000/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updItem),
    });

    const data = await response.json();
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
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
