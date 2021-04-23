import React, { useEffect, useState } from "react";

import App from "../layouts/App";

const Home = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [comment, setComment] = useState();

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setName(e.target.value);
  // };

  return (
    <App>
      <p>Home</p>
      <div>
        Name:{" "}
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <span>{name}</span>
      </div>

      <div>
        Email:{" "}
        <input
          type="text"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <span>{email}</span>
      </div>

      <div>
        Comment:{" "}
        <input
          type="textarea"
          name="comment"
          onChange={(e) => setComment(e.target.value)}
        />
        <span>{comment}</span>
      </div>
    </App>
  );
};

export default Home;
