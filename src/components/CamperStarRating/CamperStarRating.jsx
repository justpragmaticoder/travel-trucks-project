import styles from "./CamperStarRating.module.css";
const CamperStarRating = ({ rating, totalStars = 5 }) => {
  const stars = Array.from({ length: totalStars }, (_, index) => index + 1);

  return (
    <div className={styles.camperStarRating}>
      {stars.map((star) => (
        <span
          key={star}
          className={
            star <= rating ? `${styles.camperStar} ${styles.filled}` : styles.camperStar
          }
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default CamperStarRating;
