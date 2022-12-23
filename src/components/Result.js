import React from "react";
import styled from "styled-components";
import locationLogo from "../assets/icon-location.svg";
import twitterLogo from "../assets/icon-twitter.svg";
import websiteLogo from "../assets/icon-website.svg";
import companyLogo from "../assets/icon-company.svg";
import { useGlobalContext } from "../context";

const ResultContainer = styled.div`
  transition: var(--transition-default);
  background-color: ${(props) =>
    props.darkMode === false
      ? "var(--clr-white-primary)"
      : "var(--clr-dark-bold)"};
  padding: 30px 25px 50px 25px;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  border-radius: 15px;
`;
const ResultGridCont = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 1024px) {
    grid-template-columns: 150px 1fr;
  }
`;
const GridImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  display: none;
  @media screen and (min-width: 1024px) {
    display: block;
  }
`;
const ResultContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;
const GeneralInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }
  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`;
const UpperGeneral = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  @media screen and (min-width: 768px) {
    gap: 40px;
  }
`;
const UserImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  @media screen and (min-width: 768px) {
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;
const UpperGeneralFlexTextes = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 6px;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;
const LoginText = styled.p`
  font-size: 13px;
  line-height: 19px;
  color: var(--clr-blue-primary);
`;
const LowerGeneral = styled.div``;

const FollowersInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  transition: var(--transition-default);
  background-color: ${(props) =>
    props.darkMode === false
      ? "var(--clr-bg-light)"
      : "var(--clr-dark-bolder)"};
  padding: 30px;
  border-radius: 10px;
  & > * {
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 768px) {
    justify-content: start;
    gap: 90px;
  }
`;
const FollowersText = styled.p`
  font-size: 11px;
  line-height: 16px;
  text-transform: capitalize;
  @media screen and (min-width: 768px) {
    font-size: 13px;
    line-height: 19px;
  }
`;
const FollowersNumbers = styled.p`
  font-size: 15px;
  line-height: 25px;
  font-weight: 700;
  transition: var(--transition-default);
  color: ${(props) =>
    props.darkMode === false
      ? "var(--clr-dark-bolder)"
      : "var(--clr-white-primary)"};
  @media screen and (min-width: 768px) {
    font-size: 22px;
    line-height: 33px;
  }
`;

const SocialInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 70px;
  }
`;
const Socials = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const SocialDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
const SocialsImage = styled.img`
  height: 20px;
  width: 20px;
`;
const Result = () => {
  const { user, darkMode } = useGlobalContext();

  return (
    <ResultContainer darkMode={darkMode}>
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
          <ResultGridCont key={index}>
            <GridImage src={img} alt="user image" />
            <ResultContent>
              <GeneralInfo>
                <UpperGeneral>
                  <UserImage src={img} alt="user image" />
                  <UpperGeneralFlexTextes>
                    <div>
                      <h1>{usersName ? usersName : "No Username."}</h1>
                      <LoginText>@{login}</LoginText>
                    </div>
                    <p>
                      {new Date(joined).toLocaleDateString("en", {
                        year: "numeric",
                        month: "long",
                        day: "2-digit",
                      })}
                    </p>
                  </UpperGeneralFlexTextes>
                </UpperGeneral>
                <LowerGeneral>
                  <p>{bio ? bio : "This user has no bio."}</p>
                </LowerGeneral>
              </GeneralInfo>
              <FollowersInfo darkMode={darkMode}>
                <div>
                  <FollowersText>repos</FollowersText>
                  <FollowersNumbers darkMode={darkMode}>
                    {repos}
                  </FollowersNumbers>
                </div>
                <div>
                  <FollowersText>followers</FollowersText>
                  <FollowersNumbers darkMode={darkMode}>
                    {followers}
                  </FollowersNumbers>
                </div>
                <div>
                  <FollowersText>following</FollowersText>
                  <FollowersNumbers darkMode={darkMode}>
                    {following}
                  </FollowersNumbers>
                </div>
              </FollowersInfo>
              <SocialInfo>
                <Socials>
                  <SocialDiv>
                    <SocialsImage src={locationLogo} alt="location logo" />
                    <p>{location ? location : "Not Available."}</p>
                  </SocialDiv>
                  <SocialDiv>
                    <SocialsImage src={websiteLogo} alt="location logo" />
                    <a href={blog ? blog : "#"}>
                      {blog ? blog : "Not Available."}
                    </a>
                  </SocialDiv>
                </Socials>
                <Socials>
                  <SocialDiv>
                    <SocialsImage src={twitterLogo} alt="location logo" />
                    <p>{twitter ? twitter : "Not Available."}</p>
                  </SocialDiv>
                  <SocialDiv>
                    <SocialsImage src={companyLogo} alt="location logo" />
                    <p>{company ? company : "Not Available."}</p>
                  </SocialDiv>
                </Socials>
              </SocialInfo>
            </ResultContent>
          </ResultGridCont>
        );
      })}
    </ResultContainer>
  );
};

export default Result;
