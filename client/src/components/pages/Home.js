import React from "react";

import AboutMe from "../modules/AboutMe";
import ExperienceSection from "../modules/ExperienceSection";
import HomeHeader from "../modules/HomeHeader";
import Loading from "../modules/Loading";
import SkillsSection from "../modules/SkillsSection";
import "../../utilities.css";

const Home = (props) => {
  if (!props.profileinfo) return <Loading />;

  return (
    <>
      <div className="u-main-container">
        <HomeHeader profileinfo={props.profileinfo} />
        <AboutMe profileinfo={props.profileinfo} />
        <SkillsSection />
        <ExperienceSection />
      </div>
    </>
  );
};

export default Home;
