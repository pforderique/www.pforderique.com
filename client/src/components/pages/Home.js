import React, { useEffect, useState } from "react";

import { get, post } from "../../utilities.js";
import AboutMe from "../modules/AboutMe";
import HomeHeader from "../modules/HomeHeader";
import Loading from "../modules/Loading";
import "../../utilities.css";

const Home = (props) => {
  const [profileinfo, setProfile] = useState(undefined);
  useEffect(() => {
    get("/api/profile").then((profile) => setProfile(profile));
  }, []);

  if (!profileinfo) return <Loading />;

  return (
    <>
      <div className="u-main-container">
        <HomeHeader profileinfo={profileinfo} />
        <AboutMe profileinfo={profileinfo} />
      </div>
    </>
  );
};

export default Home;
