import React from "react";
import Create from './Create'
import Posts from "./Posts";
const Twites = () => {
  return (
    <div className="posts">
      <div className="post-home">
        <h2>
          <span>Home</span>
        </h2>
        <div className="post-contant">
          <div className="post-contant-first">
            <h3>For you</h3>
          </div>
          <div className="post-contant-second">
            <h3>Following</h3>
          </div>
        </div>
      </div>
      <Create/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
    </div>
  );
};

export default Twites;
