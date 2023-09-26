import classes from "./loading.module.css";

const Loading: React.FC = () => {
  return (
    <div className={classes.loading}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Loading;