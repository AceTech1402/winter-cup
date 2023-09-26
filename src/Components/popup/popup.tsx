import classes from "./popup.module.css";

import SuccessIcon from "./../../icons/tick.svg";
import ErrorIcon from "./../../icons/close.svg";
import WarnningIcon from "./../../icons/danger.svg";
import { NavLink } from "react-router-dom";

interface PopupProps {
  showPopup: boolean;
  result_req: number;
  message: string;
  changeShowPopupStatus: () => void;
}

const Popup: React.FC<PopupProps> = ({
  showPopup,
  result_req,
  message,
  changeShowPopupStatus,
}) => {
  return (
    <div className={`${classes.cover} ${showPopup ? classes.active : ""}`}>
      <div className={classes.popup_wrapper}>
        <div className={classes.popup}></div>
        <div className={classes.header}>
          <div className={classes.image}>
            <img
              src={
                result_req === 1
                  ? SuccessIcon
                  : result_req === 0
                  ? WarnningIcon
                  : ErrorIcon
              }
            />
          </div>
          <div className={classes.text}>
            <p
              style={{
                color:
                  result_req === 1
                    ? "#39EC6B"
                    : result_req === 0
                    ? "#FFEA00"
                    : "#FA0000",
              }}
            >
              {result_req === 1 ? "Register Successful" : "Register Faild"}
            </p>
          </div>
        </div>
        <div className={classes.body}>
          <div className={classes.text}>
            <p>{message}</p>
          </div>
          {result_req === 1 ? (
            <NavLink
              to="/"
              onClick={() => {
                changeShowPopupStatus();
              }}
              className={classes.button}
            >
              Okay
            </NavLink>
          ) : (
            <button
              className={classes.button}
              onClick={() => changeShowPopupStatus()}
              style={{
                color:
                  result_req === 0
                    ? "#1D201F"
                    : result_req === 2
                    ? "#ffffff"
                    : "",
                backgroundColor:
                  result_req === 0
                    ? "#FFEA00"
                    : result_req === 2
                    ? "#FA0000"
                    : "",
              }}
            >
              <p>try again</p>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Popup;
