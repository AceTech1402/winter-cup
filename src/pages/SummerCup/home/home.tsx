import { Helmet } from "react-helmet";
import classes from "./home.module.css";
import SectionFour from "./sections/section_four/section_four";

import SectionOne from "./sections/section_one/section_one";
import SectionSix from "./sections/section_six/section_six";
import SectionTwo from "./sections/section_two/section_two";
import { Sponsors } from "./sections/sponsors/sponsors";
import SectionFive from "./sections/section_five/section_five";
import SectionThree from "./sections/section_three/section_three";

const Home = () => {
  return (
    <>
    <Helmet>
      <title>WinterCup</title>
    </Helmet>
      <div className={classes.home_wrapper}>
      <div className={classes.orange_bg1}></div>
      <div className={classes.orange_bg2}></div>
      {/* <div className={classes.orange_bg3}></div> */}
      <div className={classes.home}>
        <SectionOne />
        <Sponsors />
        <SectionTwo />
        {/* <SectionThree /> */}
        <SectionFour />
        <SectionFive />
        <SectionSix />
        {/* <RegisterSection /> */}
      </div>
    </div> 
    </>
  );
};

export default Home;