import locationIcon from "./../../../icons/location-contained.svg";
import img1 from "./../../../assets/pictures/home/sports-platz-img.png";
import img2 from "./../../../assets/pictures/sports-platz/sports-platz-img2.png";
import img3 from "./../../../assets/pictures/sports-platz/sports-platz-img3.png";
import img4 from "./../../../assets/pictures/sports-platz/sports-platz-img4.png";
import classes from "./sportsPlatz.module.css";

const SportsPlatz: React.FC = () => {
  return (
    <div className={classes.sportsPlatz}>
      <div className={classes.heading}>
        <h1>Euro challenge</h1>
        <div className={classes.location}>
          <span>
            <img src={locationIcon} />
          </span>
          <h4>SC Ritzing</h4>
        </div>
      </div>
      <div className={classes.content}>
        <p>
          Lorem ipsum dolor sit amet. Ad doloremque fugiat 33 eveniet autem sed
          vitae maiores a inventore eveniet. Qui dolor assumenda non aliquid
          neque et atque incidunt sit quae delectus et nulla mollitia. Non enim
          officia ea quaerat obcaecati sit ratione deleniti in ducimus enim. Est
          eveniet quae aut necessitatibus sapiente sit suscipit animi est omnis
          suscipit.
        </p>
        <span>
          <img src={img1} />
        </span>
        <p>
          Lorem ipsum dolor sit amet. Ad doloremque fugiat 33 eveniet autem sed
          vitae maiores a inventore eveniet. Qui dolor assumenda non aliquid
          neque et atque incidunt sit quae delectus et nulla mollitia. Non enim
          officia ea quaerat obcaecati sit ratione deleniti in ducimus enim. Est
          eveniet quae aut necessitatibus sapiente sit suscipit animi est omnis
          suscipit. Lorem ipsum dolor sit amet. Ad doloremque fugiat 33 eveniet
          autem sed vitae maiores a inventore eveniet. Qui dolor assumenda non
          aliquid neque et atque incidunt sit quae delectus et nulla mollitia.
          Non enim officia ea quaerat obcaecati sit ratione deleniti in ducimus
          enim. Est eveniet quae aut necessitatibus sapiente sit suscipit animi
          est omnis suscipit.
        </p>
        <span>
          <img src={img2} />
        </span>
        <p>
          Lorem ipsum dolor sit amet. Ad doloremque fugiat 33 eveniet autem sed
          vitae maiores a inventore eveniet. Qui dolor assumenda non aliquid
          neque et atque incidunt sit quae delectus et nulla mollitia. Non enim
          officia ea quaerat obcaecati sit ratione deleniti in ducimus enim. Est
          eveniet quae aut necessitatibus sapiente sit suscipit animi est omnis
          suscipit. Lorem ipsum dolor sit amet. Ad doloremque fugiat 33 eveniet
          autem sed vitae maiores a inventore eveniet. Qui dolor assumenda non
          aliquid neque et atque incidunt sit quae delectus et nulla mollitia.
          Non enim officia ea quaerat obcaecati sit ratione deleniti in ducimus
          enim. Est eveniet quae aut necessitatibus sapiente sit suscipit animi
          est omnis suscipit.
        </p>
        <div className={classes.groupPicture}>
          <span>
            <img src={img3} />
          </span>
          <span>
            <img src={img4} />
          </span>
        </div>
        <p>
          Lorem ipsum dolor sit amet. Ad doloremque fugiat 33 eveniet autem sed
          vitae maiores a inventore eveniet. Qui dolor assumenda non aliquid
          neque et atque incidunt sit quae delectus et nulla mollitia. Non enim
          officia ea quaerat obcaecati sit ratione deleniti in ducimus enim. Est
          eveniet quae aut necessitatibus sapiente sit suscipit animi est omnis
          suscipit.
        </p>
      </div>
    </div>
  );
};

export default SportsPlatz;
