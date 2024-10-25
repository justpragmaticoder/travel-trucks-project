import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.circularSpinner}></div>
    </div>
  );
};

export default Loader;