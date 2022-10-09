import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { v4 as uuidv4 } from "uuid";
//import FeedbackItem from "./components/FeedbackItem";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import { useState } from "react";
import AboutPage from "./pages/AboutPage";
import FeedbackForm from "./components/FeedbackForm";
import AboutIconLink from "./components/AboutIconLink";
import Post from "./components/Post";

import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
    //return only that array whose id not selected
  };

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm handleAdd={addFeedback} />

                  <FeedbackStats feedback={feedback} />
                  <FeedbackList
                    feedback={feedback}
                    handleDelete={deleteFeedback}
                  />
                </>
              }
            >
              {/* <Card>
          <h1>Hello Wrrld</h1>
          <div className="num-display">{feedback[0].rating}</div>
        </Card>
        <h1>My app</h1> */}
            </Route>
          </Routes>
          <Routes>
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <Routes>
            <Route path="/post/:id/:name/*" element={<Post />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;

// function App() {
//     //   const title = "Hello";
//     //   const comments = [
//     //     { id: 1, text: "array1" },
//     //     {
//     //       id: 2,
//     //       text: "array2",
//     //     },
//     //   ];

//     //   const showcomments = true;
//     //   const commentlist = (
//     //     <div className="comments">
//     //       <ul>
//     //         {comments.map((comment, index) => (
//     //           <li key={comment.id}>{comment.text} </li>
//     //         ))}
//     //       </ul>
//     //     </div>
//     //   );
//     return (
//       <div className="container">
//         <h1>My app</h1>
//         {/* <p>{title} </p>
//         <h1>This is jsx thats is returning html code inside javascript</h1>
//         {showcomments && commentlist} */}
//       </div>
//     );
//   }

//   export default App;
