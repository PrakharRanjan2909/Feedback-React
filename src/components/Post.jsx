import React from "react";
import { useParams } from "react-router-dom";
import { Navigate, useNavigate, Route, Routes } from "react-router-dom";

function Post() {
  const params = useParams();
  const status = 200;
  const navigate = useNavigate();
  if (status === 404) {
    return <Navigate to="/notfound" />;
  }
  const onClick = () => {
    console.log("Redirect");
    navigate("/about");
  };

  return (
    <div>
      <h1>Post {params.id}</h1>
      <h1>Name : {params.name}</h1>
      <button onClick={onClick}>Redirect</button>
      <Routes>
        <Route path="/show" element={<h1>Hi This is nested route</h1>}></Route>
      </Routes>
    </div>
  );
}

export default Post;
