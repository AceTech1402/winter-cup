import classes from './sponsors.module.css';
import sponsor1 from './../../../../../assets/pictures/home/sponsor1.svg';
import sponsor2 from './../../../../../assets/pictures/home/sponsor2.svg';

const sponsors = [
  {
    id: '1',
    logo: sponsor1,
  },
  {
    id: '2',
    logo: sponsor2,
  },
  {
    id: '3',
    logo: sponsor1,
  },
  {
    id: '4',
    logo: sponsor2,
  },
  {
    id: '5',
    logo: sponsor2,
  },
]

export const Sponsors: React.FC = () => {
  return (
    <div className={classes.sponsersSection}>
      <h1>Sponsoren</h1>
      <p>
        Die neue Event Management Marke, Golden Sports, veranstaltet die dritte
        Ausgabe vom Sommercup.In diesem Jahr wieder mit top Preisen. Am 9. und
        16. August 2020 gehen die Events über die Bühne.
      </p>
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
