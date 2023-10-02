import ButtonRegister from "../../../../../Components/button_register/button_register";

//styles
import classes from "./section_four.module.css";

//images
import thePrize from "./../../../../../assets/pictures/home/the-prize.png";

const initialPrices = [
  {
    id: 1,
    title: "Platz: Eine Playstation 5 pro Spieler des Siegerteams",
    // explain:
    //   "Die neue Event Management Marke, Golden Sports, veranstaltet die dritte Ausgabe vom Sommercup.In diesem.",
  },
  {
    id: 2,
    title: "Platz: Eine Garnitur Trikots nach Wahl",
    // explain:
    //   "Die neue Event Management Marke, Golden Sports, veranstaltet die dritte Ausgabe vom Sommercup.In diesem.",
  },
  // {
  //   id: 3,
  //   title: "Platz",
  //   explain:
  //     "Die neue Event Management Marke, Golden Sports, veranstaltet die dritte Ausgabe vom Sommercup.In diesem.",
  // },
];

const SectionFour: React.FC = () => {
  return (
    <div className={classes.section_four_wrapper}>
      <div className={classes.section_four}>
        <div className={classes.container}>
          <div className={classes.items_left}>
            <div className={classes.title}>
              <h1>Preise</h1>
            </div>
            <div className={classes.explain}>
              {initialPrices.map((item, index) => (
                <div className={classes.item} key={item.id}>
                  <div className={classes.title}>
                    <p>{`${index + 1}. ${item.title}`}</p>
                  </div>
                  {/* <div className={classes.explain}>
                    <p>{item.explain}</p>
                  </div> */}
                </div>
              ))}
            </div>
            <ButtonRegister />
          </div>
          <div className={classes.items_right}>
            <div className={classes.image}>
              <img src={thePrize} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
