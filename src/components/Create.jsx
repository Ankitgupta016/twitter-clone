import React from 'react'
import logo from "../img/logo.jpg"
import {
FaRegImage,
FaRegSmile,
FaCalendarCheck,

} from "react-icons/fa";
import{MdOutlineGifBox,} from "react-icons/md";
import{BiMap} from "react-icons/bi";
const Create = () => {
  return (
    <div className='create'>
      <div className="create-first">
        <div className="create-img">
          <img src={logo} alt="" />
        </div>
        <div className="create-control">
          <input className='create-input'  type="text" placeholder="What's happing?"/>
        </div>
      </div>
    <div className="create-second">
      <div className="create-icons">
          <FaRegImage  className='ic'/>
          <MdOutlineGifBox className='ic'/>
          <FaRegSmile className='ic'/>
          <FaCalendarCheck className='ic'/>
          <BiMap className='ic'/>
      </div>
      <div className="tweet-btn">
          <h5>Tweet</h5>
              
        </div>
    </div>
   
    </div>
  )
}

export default Create