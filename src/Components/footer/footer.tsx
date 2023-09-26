import classes from "./footer.module.css";
import logoImg from "./../../assets/pictures/navbar/logo.svg";
import { NavLink } from "react-router-dom";
import smsIcon from "./../../icons/sms.svg";
import locationIcon from "./../../icons/location.svg";
import { ContactUs, ItemsFooter } from "../../types/types";

const itemsFooter: ItemsFooter[] = [
  {
    id: 1,
    title: "Get In Touch",
    items: [
      { id: 1, text: "Kontakt", link: "https://goldensports.at/#contactus" },
      { id: 2, text: "Impressum", link: "https://goldensports.at/impressum" },
      { id: 3, text: " Newsletter"},
      { id: 4, text: " Feedback"},
    ],
  },
  {
    id: 2,
    title: "Über die WinterCup",
    items: [
      { id: 1, text: "Geschichte"},
      { id: 2, text: "Über uns" },
      { id: 3, text: " Das Team" },
      { id: 4, text: " Golden Sports Events", link: "https://goldensports.at/events" },
    ],
  },
];

const cantactus: ContactUs[] = [
  {
    id: 1,
    title: "Stay in touch!",
    items: [
      { id: 1, icon: smsIcon, text: "Support@goldensports.at" },
      {
        id: 2,
        icon: locationIcon,
        text: "Maulbertschgasse 7/5, 1190 Wien, Austria",
      },
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <div className={classes.footer_wrapper}>
      <div className={classes.footer}>
        <div className={classes.items_left}>
          <div className={classes.items}>
            <div className={classes.item_start}>
              <div className={classes.logo_wrapper}>
                <div className={classes.logo}>
                  <img src={logoImg} />
                </div>
                <div className={classes.text}>
                  <p>Winter Cup</p>
                </div>
              </div>
              <div className={classes.agb}>
                <NavLink
                  to="https://www.goldensports.at/events-agb"
                  target="_blank"
                >
                  Events AGB
                </NavLink>
              </div>
            </div>
          </div>
          {itemsFooter.map((item) => (
            <div className={classes.items} key={item.id}>
              <div className={classes.title}>
                <p>{item.title}</p>
              </div>
              <ul>
                {item.items.map((text) => (
                  <li key={text.id}>
                    {
                      text.link? (<NavLink to={text.link}>{text.text}</NavLink>):(<p>{text.text}</p>)
                    }
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={classes.items_right}>
          {cantactus.map((item) => (
            <div className={classes.item} key={item.id}>
              <div className={classes.title}>
                <p>{item.title}</p>
              </div>
              <ul>
                {item.items.map((txt) => (
                  <li key={txt.id}>
                    <div className={classes.icon}>
                      <img src={txt.icon} />
                    </div>
                    <div className={classes.text}>
                      <p>{txt.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className={classes.link_wrapper}>
        <p>
          Powered by
          <NavLink to="https://www.goldensports.at/" target="_blank">
            Goldensports.at
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Footer;
