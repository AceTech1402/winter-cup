import { useState } from "react";

import classes from "./section_three.module.css";

//initial_data
// import { initialSponsers } from "../../../../../intial_datas/initial_data";

const SectionThree: React.FC = () => {
  // const [sponsers, setSponsers] = useState(initialSponsers);

  return (
    <div className={classes.section_three_wrapper}>
      {/* <div className={classes.section_three}>
        <div className={classes.container}>
          <div className={classes.title}>
            <h1>Sponsoren</h1>
          </div>
          <div className={classes.explain}>
            <p>
              Interessierte Sponsoren können uns gerne anschreiben. Wir haben
              tolle und preiswerte Pakete für euch um euch auf Österreichs
              größte Sommerturnierserie zu präsentieren.
            </p>
          </div>
          <div className={classes.sponsers_items}>
            {sponsers.map((item) => (
              <div className={classes.item} key={item.id}>
                <img src={item.image} title={item.title} alt={item.title} />
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default SectionThree;
