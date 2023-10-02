import { useEffect, useState } from "react";
import classes from "./teams_item.module.css";

const TeamsItem: React.FC<{ teams: any[] }> = ({ teams }) => {

  // const [changeItems, setChangeItems] = useState(teams)
  // const pushEmptyObject = (teams: any[]) => {
  //   let number = 0;
  //   for (let i = 0; i < teams.length; i++) {
  //     number = i;
  //   }
  //   if (number < 48) {
  //     for (let i = number + 1; i < 48; i++) {
  //       setChangeItems([...changeItems, {id: number + 1, title: ""}])
  //     }
  //   }
  // };

  // useEffect(() => {
  //     pushEmptyObject(changeItems);
  //     console.log(changeItems)
  // }, [changeItems]);

  return (
    <div className={classes.teams_wrapper}>
      <div className={classes.teams}>
        {/* <div className={classes.title}>
          <h3>Teams</h3>
        </div> */}
        <div className={classes.items}>
          {teams.map((item, index) =>
            item.title !== "" ? (
              <div className={classes.item} key={item.id}>
                <div className={classes.circle}>{index + 1}</div>
                <p>{item.title}</p>
                {/* <span>({item.country})</span> */}
              </div>
            ) : (
              <div className={classes.empty} key={item.id}></div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamsItem;