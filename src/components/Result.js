import React from "react";
import styled from "styled-components";
import locationLogo from "../assets/icon-location.svg";
import twitterLogo from "../assets/icon-twitter.svg";
import websiteLogo from "../assets/icon-website.svg";
import companyLogo from "../assets/icon-company.svg";
import { useGlobalContext } from "../context";

const ResultContainer = styled.div`
  background-color: var(--clr-white-primary);
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
  background-color: var(--clr-bg-light);
  padding: 30px;
  border-radius: 10px;
  & > * {
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width:768px){
    justify-content: start;
    gap: 90px;
  }
`;
const FollowersText = styled.p`
  font-size: 15px;
  line-height: 20px;
  text-transform: capitalize;
`;
const FollowersNumbers = styled.p`
  font-size: 15px;
  line-height: 25px;
  font-weight: 700;
  color: var(--clr-dark-bolder);
  @media screen and (min-width: 768px) {
    font-size: 22px;
    line-height: 33px;
  }
`;

const SocialInfo = styled.div`
display:flex;
flex-direction: column;
gap: 20px;
@media screen and (min-width:768px){
  flex-direction: row;
}
`;
const Socials = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
`
const SocialDiv = styled.div`
display: flex;
gap: 15px;
`
const Result = () => {
  const { user } = useGlobalContext();

  return (
    <ResultContainer>
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
                      <h1>{usersName}</h1>
                      <LoginText>@{login}</LoginText>
                    </div>
                    <p>{joined}</p>
                  </UpperGeneralFlexTextes>
                </UpperGeneral>
                <LowerGeneral>
                  <p>{bio ? bio : "This user has no bio."}</p>
                </LowerGeneral>
              </GeneralInfo>
              <FollowersInfo>
                <div>
                  <FollowersText>repos</FollowersText>
                  <FollowersNumbers>{repos}</FollowersNumbers>
                </div>
                <div>
                  <FollowersText>followers</FollowersText>
                  <FollowersNumbers>{followers}</FollowersNumbers>
                </div>
                <div>
                  <FollowersText>following</FollowersText>
                  <FollowersNumbers>{following}</FollowersNumbers>
                </div>
              </FollowersInfo>
              <SocialInfo>

              </SocialInfo>
            </ResultContent>
          </ResultGridCont>
        );
      })}
    </ResultContainer>
  );
};

export default Result;
