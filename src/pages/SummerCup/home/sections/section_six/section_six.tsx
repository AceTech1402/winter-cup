import classes from "./section_six.module.css";

import calendar from "./../../../../../icons/calendar.svg";
import ClockIcon from "./../../../../../icons/clock.svg";

const SectionSix: React.FC = () => {
  // const [sportsPlats, setSportsPlats] = useState(initialSportsPlats);

  // const [dataSelect, setDataSelect] = useState<any[]>([]);
  // const [finalMatch, setFinalMatch] = useState<any>();

  // useEffect(() => {
  //   axios
  //     .get("https://api.goldensports.at/request/sommercup_sports_fields")
  //     .then((res) => {
  //       // console.log(res.data.data.rows);
  //       setDataSelect(res.data.data.rows);
  //       setFinalMatch(res.data.data.rows.find((item: any) => item.final == 1));
  //     });
  // }, []);

  return (
    <div className={classes.section_six_wrapper}>
      <div className={classes.section_six}>
        <div className={classes.container}>
          <div className={classes.title}>
            <h1>Sportplätze</h1>
          </div>
          {/* <div className={classes.items}>
            {dataSelect.map((item, index) => (
              <SportPlatsItem
                key={index}
                image={item.image}
                title={item.city}
                date={item.date}
                explain={item.playground}
              />
            ))}
          </div> */}
          <div className={classes.final_match_layout}>
            <div className={classes.final_match_wrapper}>
              <div className={classes.final_match}>
                <span className={classes.title}>Linz</span>
                <span className={classes.subtitle}>Westside soccer arena</span>
                <div className={classes.date}>
                  <div className={classes.icon}>
                    <img src={calendar} />
                  </div>
                  <p>6 August</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
