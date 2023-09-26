import classes from "./section_one_item.module.css";
import locationPin from "./../../icons/location.svg";

interface SectionOneItemProps {
  title: string;
  image: string;
  number?: string;
  text: string;
  id: number;
}

export const SectionOneItem: React.FC<SectionOneItemProps> = ({
  image,
  title,
  number,
  text,
  id,
}) => {
  return (
    <div className={classes.section_one_item}>
      <div className={classes.image}>
        <img src={`${image}`} />
      </div>
      <div className={classes.caption}>
        <div className={classes.title}>
          <p>{title}</p>
        </div>
        <div className={classes.explain}>
          <div className={classes.numberSection}>
            {/* <span className={classes.number}>{number}</span> */}
            <span className={classes.text}>{text}</span>
          </div>
          {/* {id === 1 && (
            <div className={classes.location}>
              <img src={locationPin} />
              <span>SC Ritzing</span>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};
