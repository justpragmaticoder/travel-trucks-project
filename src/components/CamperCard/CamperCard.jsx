import styles from "./CamperCard.module.css";
import { Icon } from "../Icon/icon.jsx";

const CamperCard = ({ camper }) => {
  return (
    <>
      <div className={styles.headerSection}>
        <h2 className={styles.profileName}>{camper.name}</h2>
        <div className={styles.detailsSection}>
          <div className={styles.infoWrapper}>
            <div className={styles.ratingWrapper}>
              <Icon id="rating-star" width={20} height={20} />
              {camper.rating} ({camper.reviews.length} Reviews)
            </div>
            <div className={styles.locationWrapper}>
              <Icon id="map" />
              {camper.location}
            </div>
          </div>
          <h2 className={styles.priceTag}>
            €
            {camper.price.toLocaleString("en", {
              useGrouping: false,
              minimumFractionDigits: 2,
            })}
          </h2>
        </div>
      </div>
      <div className={styles.photoGallery}>
        {camper.gallery.map((image, index) => (
          <img key={index} src={image.thumb} alt={`Camper image ${index + 1}`} />
        ))}
      </div>
      <div className={styles.textDetails}>
        <p>{camper.description}</p>
      </div>
    </>
  );
};

export default CamperCard;