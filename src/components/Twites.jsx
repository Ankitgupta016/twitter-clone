import React from "react";
import Create from './Create'
import Posts from "./Posts";
import { BiSearch } from "react-icons/bi";
const Twites = () => {
  return (
    <div className="posts">
      <div className="post-home">
      <div className="post-search">
        <form className="form">
          <label>
            <BiSearch />
          </label>
          <input type="search" placeholder="Search Twitter" />
        </form>
      </div>
        <h2 className="h2">
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
