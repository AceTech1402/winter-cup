import { useState, useRef } from "react";
import { SectionOneItem } from "./../../../../../Components/section_one_item/section_one_item";
import CountDown from "../../../../../Components/count_down/count_down";
//images
import heroImg from "./../../../../../assets/pictures/home/hero-img.png";
import logoExplain from "./../../../../../assets/pictures/home/logo-explain.png";
import reward1 from "./../../../../../assets/pictures/home/stadium.png";
import reward2 from "./../../../../../assets/pictures/home/kit.png";
import reward3 from "./../../../../../assets/pictures/home/suitcase.png";
import classes from "./section_one.module.css";
//initial_data
import ButtonRegister from "../../../../../Components/button_register/button_register";

export const sectionOneItems = [
  {
    id: 1,
    image: reward1,
    title: "Time & Location",
    // number: '2',
    // text: 'Des.',
    text: 'Lorem ipsum dolor sit amt, consectetur adipiscing elit, sed do eiusmod tempor. ',
  },
  {
    id: 2,
    image: reward2,
    title: "Teams",
    // number: '80',
    // text: 'Club capacity',
    text: 'Lorem ipsum dolor sit amt, consectetur adipiscing elit, sed do eiusmod tempor. ',
  },
  {
    id: 3,
    image: reward3,
    title: "Winner Reward",
    // number: '15,000',
    // text: '€',
    text: 'Lorem ipsum dolor sit amt, consectetur adipiscing elit, sed do eiusmod tempor. ',
  },
];

const SectionOne: React.FC = () => {
  const section_one = useRef(null);

  // const [section_one_items, setSection_one_items] = useState(sectionOneItems);

  const [target_date, setTargetDate] = useState<Date>(new Date("7/15/23"));

  return (
    <div className={classes.section_one_wrapper} ref={section_one}>
      <div className={classes.section_one}>
        <div className={classes.container}>
          <div className={classes.items_left}>
            <div className={classes.title}>
              {/* <div className={classes.logo}>
                <img src={Logo} alt="logo" title="logo" />
              </div> */}
              <div className={classes.text}>
                <h1>Winer Cup</h1>
              </div>
            </div>
            <div className={classes.explain}>
              <p>Österreichs größte Sommer Turnier Serie</p>
            </div>
            {/* <div className={classes.bottom_explain}>
              <p>In Kooperation mit:</p>
            </div>
            <div className={classes.image}>
              <img src={logoExplain} alt="explain-image" />
            </div> */}
            <div className={classes.register_wrapper}>
              <div className={classes.counter}>
                <div className={classes.text}>
                  <p>Remaining time of registration</p>
                </div>
                <CountDown target_date={target_date} />
              </div>
              <ButtonRegister />
            </div>
            <div className={classes.items}>
              {sectionOneItems.map((item) => (
                <SectionOneItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  // number={item.number}
                  text={item.text}
                />
              ))}
            </div>
          </div>
          <div className={classes.items_right}>
            <div className={classes.image}>
              <img src={heroImg} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
