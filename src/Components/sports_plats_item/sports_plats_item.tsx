import classes from "./sports_plats_item.module.css";

import Calendar from "./../../icons/calendar.svg";

interface SportPlatsItemProps {
  image: string;
  title: string;
  date: string;
  explain: string;
}

const SportPlatsItem: React.FC<SportPlatsItemProps> = ({ image, title, date, explain }) => {
  return (
    <div className={classes.sport_plats_wrapper}>
      <div className={classes.sport_plats}>
        <div className={classes.image}>
          <img src={image} />
        </div>
        <div className={classes.caption}>
          <div className={classes.header}>
            <div className={classes.title}>
              {/* <div className={classes.image}>
                <img src={Location} />
              </div> */}
              <div className={classes.text}>
                <p>{title}</p>
              </div>
            </div>
          </div>
          <div className={classes.footer}>
            <div className={classes.explain}>
              <p>{explain}</p>
            </div>
            <div className={classes.date}>
              <div className={classes.image}>
                <img src={Calendar} />
              </div>
              <div className={classes.text}>
                <p>{date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportPlatsItem;
