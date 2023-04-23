import React from "react";
import {
  FaTwitter,
  FaHome,
  FaHashtag,
  FaRegBell,
  FaRegEnvelope,
  FaRegBookmark,

} from "react-icons/fa";
import { VscVerified} from "react-icons/vsc";
import { HiOutlineUser} from "react-icons/hi";
import { CgMoreO} from "react-icons/cg";
import { TiSocialTwitterCircular} from "react-icons/ti";
const SideBar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="/">
            <FaTwitter className="icons logo" />
          </a>
        </li>
        <li>
          <a href="/">
            <FaHome className="icons" /> Home
          </a>
        </li>
        <li>
          <a href="/">
            <FaHashtag className="icons" />
            Explore
          </a>
        </li>
        <li>
          <a href="/">
            <FaRegBell className="icons" />
            Notification
          </a>
        </li>
        <li>
          <a href="/">
            <FaRegEnvelope className="icons" />
            Messages
          </a>
        </li>
        <li>
          <a href="/">
            <FaRegBookmark className="icons" />
            Bookmarks
          </a>
        </li>
        <li>
          <a href="/">
            <TiSocialTwitterCircular className="icons" />
            
            Twitter Blue
          </a>
        </li>
        <li>
          <a href="/">
            <VscVerified className="icons" />
            Verified Organizations
          </a>
        </li>
        <li>
          <a href="/">
            <HiOutlineUser className="icons" />
            Profile
          </a>
        </li>
        <li>
          <a href="/">
            <CgMoreO className="icons" />
           More
          </a>
        </li>
        <div className="sidebar-btn">
            <a href="/">
                Tweet
            </a>
        </div>
      </ul>
    </div>
  );
};

export default SideBar;
