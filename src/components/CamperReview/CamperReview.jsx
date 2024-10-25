import CamperStarRating from "../CamperStarRating/CamperStarRating.jsx";
import styles from "./CamperReview.module.css";

const CamperReview = ({ id, review }) => {
  const renderInitial = (name) => {
    return name ? name.charAt(0) : "";
  };

  return (
    <li key={id} className={styles.reviewItem}>
      <div className={styles.avatarAndDetails}>
        <div className={styles.avatar}>
          {renderInitial(review.reviewer_name)}
        </div>
        <div className={styles.detailsContainer}>
          <span className={styles.reviewerName}>{review.reviewer_name}</span>
          <div className={styles.starRating}>
            <CamperStarRating rating={review.reviewer_rating} />
          </div>
        </div>
      </div>
      <p className={styles.commentText}>{review.comment}</p>
    </li>
  );
};

export default CamperReview;