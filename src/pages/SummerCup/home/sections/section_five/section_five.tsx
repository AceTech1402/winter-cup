import TeamsItem from "../../../../../Components/teams_item/teams_item";
import classes from "./section_five.module.css";

const registeredTeams: any[] = [
  { id: "1", title: "Golden Boys", flag: '', country: 'Aus' },
  { id: "2", title: "Golden Boys", flag: '', country: 'Aus' },
  { id: "3", title: "Golden Boys", flag: '', country: 'Aus' },
  { id: "4", title: "Golden Boys", flag: '', country: 'Aus' },
  { id: "5", title: "Golden Boys", flag: '', country: 'Aus' },
  { id: "6", title: "Golden Boys", flag: '', country: 'Aus' },
  { id: "7", title: "Golden Boys", flag: '', country: 'Aus' },
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