import React from "react";
import { BiSearch } from "react-icons/bi";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import { VscVerifiedFilled } from "react-icons/vsc";
import { SiWindows11 } from "react-icons/si";
const Search = () => {
  return (
    <div className="search">
      <div className="search-home">
        <form>
          <label>
            <BiSearch />
          </label>
          <input type="search" placeholder="Search Twitter" />
        </form>
      </div>
      <div className="search-first">
        <h1>What’s happening</h1>
        <div className="trends">
          <span>Trending in India</span>
          <h3>Preity Zinta</h3>
        </div>
        <div className="trends">
          <span>Sports · Trending</span>
          <h3>Arjun Tendulkar</h3>
          <span>Trending with Rohit, #SachinTendulkar</span>
        </div>
        <div className="trends">
          <span> Trending in India</span>
          <h3>#ViratKohli</h3>
          <span> 2,752 Tweets</span>
        </div>

        <div className="trends">
          <span>Sports · Trending</span>
          <h3>Arjun Tendulkar</h3>
          <span>Trending with Rohit, #SachinTendulkar</span>
        </div>

        <div className="trends">
          <h4>Show more</h4>
        </div>
      </div>
      <div className="search-second">
        <h1>Who to follow</h1>
        <div className="follow">
          <div className="main-div">
            <div className="div-icon twitters">
              <FaTwitter className="div-icons" />
            </div>
            <div>
              <h3>
                Twitter{" "}
                <VscVerifiedFilled
                  style={{
                    color: "#e2b719",
                    marginTop: "2px",
                    marginLeft: "2px",
                  }}
                />
              </h3>
              <span className="post-span">@Twitter</span>
            </div>
          </div>

          <div className="follow-btn">
            <h5>Follow</h5>
          </div>
        </div>

        <div className="follow">
          <div className="main-div">
            <div className="div-icon youtube">
              <FaYoutube className="div-icons" />
            </div>
            <div>
              <h3>
                YouTube
                <VscVerifiedFilled
                  style={{
                    color: "#e2b719",
                    marginTop: "2px",
                    marginLeft: "2px",
                  }}
                />
              </h3>
              <span className="post-span">@YouTube</span>
            </div>
          </div>

          <div className="follow-btn">
            <h5>Follow</h5>
          </div>
        </div>

        <div className="follow">
          <div className="main-div">
            <div className="div-icon" style={{ background: "#1da1f2" }}>
              <h1 className="div-icons jio">Jio</h1>
            </div>
            <div>
              <h3>
                Reliance
                <VscVerifiedFilled
                  style={{
                    color: "#1da1f2",
                    marginTop: "2px",
                    marginLeft: "2px",
                  }}
                />
              </h3>
              <span className="post-span">@reliancejio</span>
            </div>
          </div>

          <div className="follow-btn">
            <h5>Follow</h5>
          </div>
        </div>
        <div className="follow">
          <div className="main-div">
            <div className="div-icon" style={{background:"#fff"}}>
              <SiWindows11 className="div-icons"style={{color:"#1da1f2"}} />
            </div>
            <div>
              <h3>
                Windows
                <VscVerifiedFilled
                  style={{
                    color: "#e2b719",
                    marginTop: "2px",
                    marginLeft: "2px",
                  }}
                />
              </h3>
              <span className="post-span">@Windows</span>
            </div>
          </div>

          <div className="follow-btn">
            <h5>Follow</h5>
          </div>
        </div>
        <div className="trends">
          <h4>Show more</h4>
        </div>
      </div>
    </div>
  );
};

export default Search;
