import { useState, useRef } from "react";
import { SectionOneItem } from "./../../../../../Components/section_one_item/section_one_item";
import CountDown from "../../../../../Components/count_down/count_down";
//images
import heroImg from "./../../../../../assets/pictures/home/hero-img.png";
import reward1 from "./../../../../../assets/pictures/home/stadium.png";
import reward2 from "./../../../../../assets/pictures/home/kit.png";
import classes from "./section_one.module.css";
//initial_data
import ButtonRegister from "../../../../../Components/button_register/button_register";

export const sectionOneItems = [
  {
    id: 1,
    image: reward1,
    title: "Zeit und Ort",
    number: '8.',
    text: 'Dez',
    location: 'Westside Soccer Arena',
  },
  {
    id: 2,
    image: reward2,
    title: "Teams",
    number: '50',
    // text: 'Club capacity',
    text: 'Teams',
  },
  // {
  //   id: 3,
  //   image: reward3,
  //   title: "Winner Reward",
  //   // number: '15,000',
  //   // text: '€',
  //   text: 'Lorem ipsum dolor sit amt, consectetur adipiscing elit, sed do eiusmod tempor. ',
  // },
];

const SectionOne: React.FC = () => {
  const section_one = useRef(null);

  // const [section_one_items, setSection_one_items] = useState(sectionOneItems);

  const [target_date, setTargetDate] = useState<Date>(new Date("12/08/23"));

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
                <h1>Winter Cup</h1>
              </div>
            </div>
            <div className={classes.explain}>
              <p>Österreichs größte Winter Hallenturnier</p>
            </div>
            {/* <div className={classes.bottom_explain}>
              <p>Offizieller Partner des Osterreichischer Kleinfeld Fussball Bund</p>
            </div>
            <div className={classes.image}>
              <img src={logoExplain} alt="explain-image" />
            </div> */}
            <div className={classes.register_wrapper}>
              <div className={classes.counter}>
                <div className={classes.text}>
                  <p>verbleibende Zeit bis zum Start</p>
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
                  number={item.number}
                  text={item.text}
                  location={item.location}
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
