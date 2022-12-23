import React, { useCallback, useEffect } from "react";
import { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProveder = ({ children }) => {
  const [error, setError] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState([]);
  const [userName, setUserName] = useState("");
  const [search, setSearch] = useState("octocat");
  const url = `https://api.github.com/users/${search}`;
  const getUsers = useCallback(async () => {
    const response = await fetch(url);
    if (response.status >= 200 && response.status <= 299) {
      const users = await response.json();
      if (users) {
        const newUser = [users].map((userInfo) => {
          const {
            avatar_url,
            bio,
            company,
            created_at,
            following,
            followers,
            html_url,
            name,
            public_repos,
            location,
            twitter_username,
            blog,
            login,
          } = userInfo;
          return {
            img: avatar_url,
            company: company,
            bio: bio,
            joined: created_at,
            following: following,
            followers: followers,
            ghUrl: html_url,
            usersName: name,
            repos: public_repos,
            location: location,
            twitter: twitter_username,
            blog: blog,
            login: login,
          };
        });
        setUser(newUser);
      }
    } else {
      setUser(user);
      setError(true);
    }
  }, [url]);
  useEffect(() => {
    setError(false);
    getUsers();
  }, [search, getUsers]);
  return (
    <AppContext.Provider
      value={{
        darkMode,
        setDarkMode,
        error,
        user,
        setUserName,
        userName,
        search,
        setSearch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProveder };
