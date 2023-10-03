import classes from './sponsors.module.css';
import OKFBSponser from "./../../../../../assets/pictures/home/paterns/sponser-okfb.svg";
import AcetechSponser from "./../../../../../assets/pictures/home/paterns/sponser-acetech.svg";
import ErimaSponser from "./../../../../../assets/pictures/home/paterns/sponser-erima.svg";
import DieSponser from "./../../../../../assets/pictures/home/paterns/die.svg";
import WSASponser from "./../../../../../assets/pictures/home/paterns/wsa.svg";

const sponsors = [
  {
    id: '1',
    logo: OKFBSponser,
  },
  {
    id: '2',
    logo: AcetechSponser,
  },
  {
    id: '3',
    logo: WSASponser,
  },
  {
    id: '4',
    logo: DieSponser,
  },
  {
    id: '5',
    logo: ErimaSponser,
  },
]

export const Sponsors: React.FC = () => {
  return (
    <div className={classes.sponsersSection}>
      <h1>Partners</h1>
      {/* <p>
        Die neue Event Management Marke, Golden Sports, veranstaltet die dritte
        Ausgabe vom Sommercup.In diesem Jahr wieder mit top Preisen. Am 9. und
        16. August 2020 gehen die Events über die Bühne.
      </p> */}
      <ul className={classes.sponsers}>
      {sponsors.map((sponsor) => (
        <span className={classes.sponsor} key={sponsor.id}>
          <img src={sponsor.logo} />
        </span>
      ))}
      </ul>
    </div>
  );
};
