import { NavLink } from "react-router-dom";
import classes from "./eventBoxItem.module.css";
import { EventsListType } from "../../types/types";

interface EventBoxItem {
  info: EventsListType,
  activeClass: boolean,
}

export const EventBoxItem: React.FC<EventBoxItem> = ({ info, activeClass }) => {
  return (
    <div className={`${classes.event_box_item_wrapper} ${
        activeClass ? classes.active : ""
      }`}>
      <NavLink
        to={info.link}
        className={`${classes.event_box_item}`}
        target="_blank"
      >
        <div className={classes.text}>
          <p>{info.text}</p>
        </div>
        <div className={classes.icon}>
          <img src={info.logo} className={info.id === 5 ? 'p-1' : ''} />
        </div>
      </NavLink>
    </div>
  );
};