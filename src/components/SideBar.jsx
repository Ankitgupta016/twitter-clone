import React from "react";
import {
  FaTwitter,
  FaHome,
  FaHashtag,
  FaRegBell,
  FaRegEnvelope,
  FaRegBookmark,
} from "react-icons/fa";
import { VscVerified } from "react-icons/vsc";
import { HiOutlineUser } from "react-icons/hi";
import { CgMoreO } from "react-icons/cg";
import { TiSocialTwitterCircular } from "react-icons/ti";
const SideBar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="/">
            <FaTwitter className="icons logo" />
          </a>
        </li>
        <li className="li">
          <a href="/">
            <FaHome className="icons" /> <span>Home</span>
          </a>
        </li>
        <li className="li">
          <a href="/">
            <FaHashtag className="icons" />
            <span> Explore</span>
          </a>
        </li>
        <li className="li">
          <a href="/">
            <FaRegBell className="icons" />
            <span> Notification</span>
          </a>
        </li>
        <li className="li">
          <a href="/">
            <FaRegEnvelope className="icons" />
            <span> Messages</span>
          </a>
        </li>
        <li className="li">
          <a href="/">
            <FaRegBookmark className="icons" />
            <span> Bookmarks</span>
          </a>
        </li>
        <li className="li">
          <a href="/">
            <TiSocialTwitterCircular className="icons" />

            <span> Twitter Blue</span>
          </a>
        </li>
        <li className="li">
          <a href="/">
            <VscVerified className="icons" />
            <span>Verified Organizations</span>
          </a>
        </li>
        <li className="li">
          <a href="/">
            <HiOutlineUser className="icons" />
            <span> Profile</span>
          </a>
        </li>
        <li className="li">
          <a href="/">
            <CgMoreO className="icons" />
            <span> More</span>
          </a>
        </li>
        <div className="sidebar-btn">
          <a href="/">Tweet</a>
        </div>
      </ul>
    </div>
  );
};

export default SideBar;
