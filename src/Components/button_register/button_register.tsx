import { NavLink } from "react-router-dom";

import classes from "./button_register.module.css";

const ButtonRegister: React.FC = (small) => {
  return (
    <div className={classes.button_show_register}>
      <NavLink to="register" className={classes.button} style={{ maxWidth: `${small ? "177px" : "225px"}` }}>
        <p>Register Now</p>
      </NavLink>
    </div>
  );
};

export default ButtonRegister;
