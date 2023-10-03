import TeamsItem from "../../../../../Components/teams_item/teams_item";
import classes from "./section_five.module.css";

const registeredTeams: any[] = [
  { id: "1", title: "Hinter Mailand", flag: "" },
  { id: "2", title: "Vatreni Bec", flag: "" },
  { id: "3", title: "FC Koma", flag: "" },
  { id: "4", title: "Favoritner Jungs", flag: "" },
  { id: "5", title: "Graz Devils", flag: "" },
  { id: "6", title: "Café Amigo", flag: "" },
  { id: "7", title: "Vienna Kickers", flag: "" },
];

const SectionFive: React.FC = () => {
  return (
    <div className={classes.section_five_wrapper}>
      <div className={classes.section_five}>
        <div className={classes.container}>
          <div className={classes.title}>
            <h1>Angemeldete Teams</h1>
          </div>
          <div className={classes.items}>
            <TeamsItem teams={registeredTeams} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
