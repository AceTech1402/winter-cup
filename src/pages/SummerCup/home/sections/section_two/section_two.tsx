import classes from "./section_two.module.css";
import dollarIcon from "./../../../../../icons/dollar-square.svg";
import calendarIcon from "./../../../../../icons/calendar.svg";
import fieldIcon from "./../../../../../icons/field.svg";
import cupIcon from "./../../../../../icons/cup.svg";
import ImageSection from "./../../../../../assets/pictures/home/turniererklarung.png";

const detailsData = [
  {
    id: "1",
    icon: calendarIcon,
    key: "9. August: ",
    value: "Salzburg und Innsbruck",
  },
  // { id: "2", icon: cupIcon, key: "Final", value: "16 Des" },
  // { id: "3", icon: fieldIcon, key: "Sportsplatz", value: "SC Ritzing" },
  // { id: "4", icon: dollarIcon, key: "Enterprise", value: "€ 390" },
];

const SectionTwo: React.FC = () => {
  // const [playsDate, setPlaysDate] = useState<any[]>(initialPlaysDate);

  // useEffect(() => {
  //   axios
  //     .get("https://api.goldensports.at/request/sommercup_sports_fields")
  //     .then((res) => {
  //       // console.log(res.data.data.rows);
  //       setPlaysDate(res.data.data.rows);
  //       // setFinalMatch(res.data.data.rows.find((item) => item.final == 1));
  //     });
  // }, []);

  return (
    <div className={classes.section_two_wrapper}>
      <div className={classes.section_two}>
        <div className={classes.container}>
          <div className={classes.leftItem}>
            <div className={classes.title}>
              <h1>Turniererklärung</h1>
            </div>
            <div className={classes.explain}>
              <p>
                Österreichs größtes Tagesturnier findet heuer wieder am 8.
                Dezember statt. An der Topanlage West Side Soccer Arena werden
                auf 5 Courts um den Sieg gekämpft, Wie immer bekommt das
                Siegerteam eine Playstation 5 pro Spieler überreicht.
              </p>
              <p>
                Beim Rekordevent im Jahr 2019 starteten 60 Teams in Turnier. Für
                dieses Jahr möchten wir diesen Rekord brechen. Wir freuen uns
                auf euch
              </p>
            </div>
            {/* <div className={classes.plays_date}>
              {detailsData.map((item) => (
                <div className={classes.item} key={item.id}>
                  <span className={classes.image}>
                    <img src={item.icon} />
                  </span>
                  <span className={classes.key}>{item.key}</span>
                  <span className={classes.value}>{item.value}</span>
                </div>
              ))}
            </div>
            <div className={classes.explain}>
              <p>
                Das Turnier wird in Kooperation mit dem Österreichischen
                Kleinfeld Fußball Bund gespielt.Insgesamt <span>16 Teams</span>{" "}
                finden bei diesem Turnier einen Startplatz (pro Standort). Es
                wird auf zwei Spielfelder simultan gespielt. Das Turnier startet
                um 10:00 für alle Mannschaften. Geleitet wird das Event von
                Schiedsrichtern des ÖKFB.
              </p>
              <p>
                Nun, was gibt es denn zu gewinnen? Die Siegermannschaft erhält
                eine Garnitur Trainingsanzüge nach Modell und Farbwahl.
              </p>
              <p>
                Der zweite Platz erhält eine Garnitur Trikots. Ebenfalls nach
                Wahl. Beide Finalisten erhalten ein halbes Jahr Kleinfeld Liga
                kostenlos.
              </p>
              <p>
                Teilnahmeberechtigt ist jeder Spieler ab 16 Jahren. Ob das
                Teilnehmerfeld vergrößert wird ist nicht garantiert.
              </p>
            </div> */}
          </div>
          <div className={classes.rightItem}>
            <div className={classes.image}>
              <img src={ImageSection} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
