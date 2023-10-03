import { createRef, useEffect, useState } from "react";

import classes from "./eventsBox.module.css";

import SommerCupLogo from "./../../logos/sommer-cup-logo.svg";
import WinterCupLogo from "./../../logos/winter-cup-logo.svg";
import UniLigaLogo from "./../../logos/uni-liga-logo.svg";
import KleinfeldLogo from "./../../logos/kleinfeld-logo.svg";
import EuroChallenge from './../../logos/euro-challange-logo.svg';
import BusinessLeagueLogo from "./../../logos/business-league-logo.svg";
import KontinentalLogo from "./../../logos/kontinental-cup-logo.svg";
import AustriaTourLogo from "./../../logos/austria-tour-logo.svg";
import { EventsListType } from "../../types/types";
import { EventBoxItem } from "../event-box-item/eventBoxItem";

const EventsList: EventsListType[] = [
  { id: 1, text: "Sommercup", logo: SommerCupLogo, link: "https://sommercup.goldensports.at/" },
  { id: 2, text: "Wintercup", logo: WinterCupLogo, link: "https://wintercup.goldensports.at/" },
  {
    id: 3,
    text: "Kleinfeld WM",
    logo: KleinfeldLogo,
    link: "https://kleinfeldwm.goldensports.at/",
  },
  { id: 4, text: "Business League", logo: BusinessLeagueLogo, link: "#" },
  { id: 5, text: "Uni Liga", logo: UniLigaLogo, link: "https://uniliga.at/" },
  { id: 6, text: "Euro Challenge", logo: EuroChallenge, link: "https://eurochallenge.goldensports.at/" },
  { id: 7, text: "Kontinental Cup", logo: KontinentalLogo, link: "https://kontinental.goldensports.at/" },
  { id: 8, text: "Austria Tour", logo: AustriaTourLogo, link: "/" },
];

const EventsBox: React.FC = () => {
  const [openListEvents, setOpenListEvents] = useState<boolean>(false);
  let list_events = createRef<HTMLDivElement>();
  const toggleListEventsFn = () => {
    setOpenListEvents((state) => !state);
  };

  useEffect(() => {
    if (openListEvents) {
      if (list_events.current) {
        for (let i = 0; i < list_events.current.children.length; i++) {
          // @ts-ignore
          list_events.current.children[i].style.bottom = `${i * 64}px`;
        }
      }
    } else {
      if (list_events.current) {
        for (let i = 0; i < list_events.current.children.length; i++) {
          //@ts-ignore
          list_events.current.children[i].style.bottom = `0px`;
        }
      }
    }
  }, [openListEvents]);

  return (
    <>
      <div
        className={`${classes.cover} ${openListEvents ? classes.active : ""}`}
        onClick={() => {
          toggleListEventsFn();
        }}
      ></div>
      <div
        className={`${classes.events_box} ${
          openListEvents ? classes.active : ""
        }`}
      >
        <div
          className={classes.button}
          onClick={() => {
            toggleListEventsFn();
          }}
        >
          <div className={classes.icon}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.1499 16.5V18.6" stroke="white" strokeWidth="1.5" />
              <path
                d="M7.1499 22H17.1499V21C17.1499 19.9 16.2499 19 15.1499 19H9.1499C8.0499 19 7.1499 19.9 7.1499 21V22V22Z"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
              />
              <path d="M6.1499 22H18.1499" stroke="white" strokeWidth="1.5" />
              <path
                d="M12 16C8.13 16 5 12.87 5 9V6C5 3.79 6.79 2 9 2H15C17.21 2 19 3.79 19 6V9C19 12.87 15.87 16 12 16Z"
                stroke="white"
                strokeWidth="1.5"
              />
              <path
                d="M5.47004 11.65C4.72004 11.41 4.06004 10.97 3.54004 10.45C2.64004 9.44998 2.04004 8.24998 2.04004 6.84998C2.04004 5.44998 3.14004 4.34998 4.54004 4.34998H5.19004C4.99004 4.80998 4.89004 5.31998 4.89004 5.84998V8.84998C4.89004 9.84998 5.10004 10.79 5.47004 11.65Z"
                stroke="white"
                strokeWidth="1.5"
              />
              <path
                d="M18.53 11.65C19.28 11.41 19.94 10.97 20.46 10.45C21.36 9.44998 21.96 8.24998 21.96 6.84998C21.96 5.44998 20.86 4.34998 19.46 4.34998H18.81C19.01 4.80998 19.11 5.31998 19.11 5.84998V8.84998C19.11 9.84998 18.9 10.79 18.53 11.65Z"
                stroke="white"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <div className={classes.text}>
            <p>Switch in events</p>
          </div>
        </div>
        <div className={classes.list} ref={list_events}>
          {EventsList.map((item) => (
            <EventBoxItem
              key={item.id}
              info={item}
              activeClass={openListEvents}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default EventsBox;
