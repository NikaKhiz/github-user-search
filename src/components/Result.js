import React from "react";
import styled from "styled-components";
import locationLogo from "../assets/icon-location.svg";
import twitterLogo from "../assets/icon-twitter.svg";
import websiteLogo from "../assets/icon-website.svg";
import companyLogo from "../assets/icon-company.svg";
import { useGlobalContext } from "../context";

const Result = () => {
  const { user } = useGlobalContext();

  return (
    <div className="result">
      {user.map((userInfo, index) => {
        const {
          img,
          usersName,
          company,
          bio,
          joined,
          following,
          followers,
          ghUrl,
          repos,
          location,
          twitter,
          blog,
        } = userInfo;
        return (
          <div key={index} className="result">
            <img src={img} alt={usersName} />
            <div className="flex-cont">
              <div className="general-info">
                <div className="name">
                  <h1>{usersName}</h1>
                  <p>{joined}</p>
                </div>
                <div className="bio">{bio ? bio : "user has no bio"}</div>
              </div>
              <div className="followers">
                <div className="repos">
                  <p>repos</p>
                  <p>{repos}</p>
                </div>
                <div className="followers">
                  <p>followers</p>
                  <p>{followers}</p>
                </div>
                <div className="following">
                  <p>following</p>
                  <p>{following}</p>
                </div>
              </div>
              <div className="location">
                <div className="location">
                  <p>{location}</p>
                  <p>{blog}</p>
                  <p>{twitter}</p>
                  <p>{company}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Result;
