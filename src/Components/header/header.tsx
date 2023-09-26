import classes from "./header.module.css";
import LinkToGS from "../link-to-golden-sports/linkToGS";
import Navbar from "../navbar/navbar";

const Header: React.FC<{ fixed?: boolean }> = ({ fixed = false }) => {
  return (
    <div className={`${classes.header_wrapper} ${fixed ? classes.fixed : ""}`}>
      <div className={classes.header}>
        <LinkToGS />
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
