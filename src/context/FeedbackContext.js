import { createContext, usestate } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  //children me saab component wrapped hoga
  const [feedback, setFeedback] = usestate([
    {
      id: 1,
      text: "This item is from context",
      rating: 10,
    },
  ]);

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;
