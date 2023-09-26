import EventsBox from "../events-box/eventsBox";
import Footer from "../footer/footer";
import Header from "../header/header";
import classes from "./layoutSommerCup.module.css";

import { Outlet, useLocation } from "react-router-dom";

const LayoutSommerCup: React.FC = () => {
  const path = useLocation().pathname.toLowerCase();

  const pathNoFooter = [
    "/register"
  ]

  return (
    <div className={classes.landing_wrapper}>
      <div className={classes.landing}>
        <Header />
        <EventsBox />
        <Outlet />
        {
          !pathNoFooter.includes(path) && (<Footer />)
        }
        {/* {footer && <Footer />} */}
      </div>
    </div>
  );
};

export default LayoutSommerCup;