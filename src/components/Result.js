import React from "react";
import styled from "styled-components";
import locationLogo from "../assets/icon-location.svg";
import twitterLogo from "../assets/icon-twitter.svg";
import websiteLogo from "../assets/icon-website.svg";
import companyLogo from "../assets/icon-company.svg";
import { useGlobalContext } from "../context";
const StyledResultDiv = styled.div`
  background: #fefefe;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  border-radius: 15px;
  padding: 25px;
`;
const StyledSocials = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
const StyledSocial = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: start;
`;
const StyledSocialIcon = styled.img`
  width: 15px;
  height: 20px;
`;
const StyledSocialText = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
`;

const StyledGhInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const StyledGhInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--clr-bg-white);
`;
const StyledGhInfoText = styled.p`
  font-size: 11px;
  line-height: 16px;
  text-align: center;
  text-transform: capitalize;
`;
const StyledNumbers = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: var(--clr-dark-bolder);
`;
const UserImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;
const Result = () => {
  const { user } = useGlobalContext();

  return (
    <StyledResultDiv>
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
          login,
        } = userInfo;
        return (
          <div key={index}>
            <UserImage src={img} alt={usersName} />
            <div className="flex-cont">
              <div className="general-info">
                <div className="name">
                  <h1>{usersName}</h1>
                  <a href={ghUrl}>@{login}</a>
                  <p>{joined}</p>
                </div>
                <div className="bio">
                  {bio ? bio : "This profile has no bio."}
                </div>
              </div>
              <StyledGhInfo>
                <StyledGhInfoDiv>
                  <StyledGhInfoText>repos</StyledGhInfoText>
                  <StyledNumbers>{repos}</StyledNumbers>
                </StyledGhInfoDiv>
                <StyledGhInfoDiv>
                  <StyledGhInfoText>followers</StyledGhInfoText>
                  <StyledNumbers>{followers}</StyledNumbers>
                </StyledGhInfoDiv>
                <StyledGhInfoDiv>
                  <StyledGhInfoText>following</StyledGhInfoText>
                  <StyledNumbers>{following}</StyledNumbers>
                </StyledGhInfoDiv>
              </StyledGhInfo>
              <div>
                <StyledSocials>
                  <div>
                    <StyledSocial>
                      <StyledSocialIcon src={locationLogo} alt="" />
                      <StyledSocialText>{location}</StyledSocialText>
                    </StyledSocial>
                    <StyledSocial>
                      <StyledSocialIcon src={websiteLogo} alt="" />
                      <StyledSocialText>{blog}</StyledSocialText>
                    </StyledSocial>
                  </div>
                  <div>
                    <StyledSocial>
                      <StyledSocialIcon src={twitterLogo} alt="" />
                      <StyledSocialText>
                        {twitter ? twitter : "Not Available"}
                      </StyledSocialText>
                    </StyledSocial>
                    <StyledSocial>
                      <StyledSocialIcon src={companyLogo} alt="" />
                      <StyledSocialText>{company}</StyledSocialText>
                    </StyledSocial>
                  </div>
                </StyledSocials>
              </div>
            </div>
          </div>
        );
      })}
    </StyledResultDiv>
  );
};

export default Result;
