import classes from "./comingSoon.module.css";

const ComingSoon: React.FC = () => {
  return (
    <div className={classes.coming_soon_wrapper}>
      <div className={classes.orange_bg1}></div>
      <div className={classes.coming_soon}>
        <div className={classes.title}>
          <h1>COMING SOON !</h1>
          <p>We are working hard on this page!</p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
