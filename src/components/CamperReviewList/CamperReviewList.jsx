import { nanoid } from "@reduxjs/toolkit";
import CamperReview from "../CamperReview/CamperReview.jsx";
import styles from "./CamperReviewList.module.css";

function CamperReviewList({ reviews }) {
  return (
    <ul className={styles.camperReviewList}>
      {reviews.map((review) => (
        <CamperReview key={nanoid()} review={review} />
      ))}
    </ul>
  );
}

export default CamperReviewList;
