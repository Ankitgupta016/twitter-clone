import React from "react";
import img from "../img/3.jpg";
import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import img4 from "../img/4.jpg";
import img5 from "../img/5.jpg";
import { VscVerifiedFilled } from "react-icons/vsc";
import { BiMessageRounded,BiBarChart } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart,AiOutlineUpload } from "react-icons/ai";
const Posts = () => {
  return (
    <>
    
    <div className="create-post">
      <div className="create-first-post">
        <div className="create-img">
          <img src={img} alt="" />
        </div>
        
        <div className="create-post-second">
          <h3>
            <span>
              Tim Cook
              <span>
                <VscVerifiedFilled className="ico" />
              </span>
            </span>
            <span className="post-span">@tim_cook</span>
          </h3>
          <div className="post-text">
          <span>
            Apple 2030 is our commitment to making all of our products and our
            supply chain carbon neutral. We’re innovating every day to redefine
            what‘s possible and to protect this planet we all share. Happy Earth
            Day!
          </span>
        </div>
        <div className="post-image">
          <img src={img1} alt="" />
          <div className="post-react">
           <span><BiMessageRounded className="icon"/> 306</span>
           <span><FaRetweet className="icon"/> 500</span>
           <span><AiOutlineHeart className="icon"/> 900</span>
           <span><BiBarChart className="icon"/> 578.5K</span>
           <span><AiOutlineUpload className="icon"/></span>
          </div>
        </div>
        </div>
      </div>
    </div>
    <div className="create-post">
      <div className="create-first-post">
        <div className="create-img">
          <img src={img2} alt="" />
        </div>
        
        <div className="create-post-second">
          <h3>
            <span>
            NASA Earth
              <span>
                <VscVerifiedFilled className="ico" />
              </span>
            </span>
            <span className="post-span">@NASAEarth</span>
          </h3>
          <div className="post-text">
          <span>
          Share if you love Earth. 💚 #EarthDay
          </span>
        </div>
        <div className="post-image">
          <img src={img2} alt="" />
          <div className="post-react">
           <span><BiMessageRounded className="icon"/> 306</span>
           <span><FaRetweet className="icon"/> 500</span>
           <span><AiOutlineHeart className="icon"/> 900</span>
           <span><BiBarChart className="icon"/> 578.5K</span>
           <span><AiOutlineUpload className="icon"/></span>
          </div>
        </div>
        </div>
      </div>
    </div>
    <div className="create-post">
      <div className="create-first-post">
        <div className="create-img">
          <img src={img4} alt="" />
        </div>
        
        <div className="create-post-second">
          <h3>
            <span>
            Elon Musk
              <span>
                <VscVerifiedFilled className="ico" />
              </span>
            </span>
            <span className="post-span">@elonmusk</span>
          </h3>
          <div className="post-text">
          <span>
          </span>
        </div>
        <div className="post-image">
          <img src={img5} alt=""  style={{border:"none"}}/>
          <div className="post-react">
           <span><BiMessageRounded className="icon"/> 306</span>
           <span><FaRetweet className="icon"/> 500</span>
           <span><AiOutlineHeart className="icon"/> 900</span>
           <span><BiBarChart className="icon"/> 578.5K</span>
           <span><AiOutlineUpload className="icon"/></span>
          </div>
        </div>
        </div>
      </div>
    </div>
    </>


  );
};

export default Posts;
