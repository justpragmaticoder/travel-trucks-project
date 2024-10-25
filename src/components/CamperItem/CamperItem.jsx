import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../redux/favoritesSlice";
import { Icon } from "../Icon/icon.jsx";
import styles from "./CamperItem.module.css";

const CamperItem = ({ camper }) => {
    const dispatch = useDispatch();
    const favoriteList = useSelector((state) => state.favorites.list);

    const isFavorite = (camperId) => favoriteList.includes(camperId);

    const toggleFavorite = (camperId) => {
        isFavorite(camperId)
          ? dispatch(removeFromFavorites(camperId))
          : dispatch(addToFavorites(camperId));
    };

    return (
      <div key={camper.id} className={styles.camperContainer}>
          <img src={camper.gallery[0].thumb} alt={camper.name} className={styles.camperImage} />
          <div className={styles.camperContent}>
              <div className={styles.titleLocationWrapper}>
                  <div className={styles.titleRow}>
                      <h2 className={styles.camperNameText}>{camper.name}</h2>
                      <div className={styles.priceWrapper}>
                          <p className={styles.priceText}>
                              €{camper.price.toLocaleString("en", {
                              useGrouping: false,
                              minimumFractionDigits: 2,
                          })}
                          </p>
                          <button
                            onClick={() => toggleFavorite(camper.id)}
                            className={styles.favoriteButtonReset}
                          >
                              <Icon
                                id="favorite"
                                width={24}
                                height={24}
                                className={isFavorite(camper.id) ? styles.favoriteIconActive : styles.favoriteIcon}
                              />
                          </button>
                      </div>
                  </div>
                  <div className={styles.ratingLocationWrapper}>
                      <div className={styles.ratingWrapper}>
                          <Icon id="rating-star" width={20} height={20} />
                          {camper.rating} ({camper.reviews.length} Reviews)
                      </div>
                      <div className={styles.locationWrapper}>
                          <Icon id="map" width={16} height={16} />
                          {camper.location}
                      </div>
                  </div>
              </div>
              <div className={styles.descriptionText}>{camper.description}</div>
              <div className={styles.infoGroup}>
                  {camper.transmission && (
                    <span className={styles.infoItem}>
                            <Icon id="diagram" width={20} height={20} />
                        {camper.transmission}
                        </span>
                  )}
                  {camper.engine && (
                    <span className={styles.infoItem}>
                            <Icon id="fuel-pump" width={20} height={20} />
                        {camper.engine}
                        </span>
                  )}
                  {camper.form && (
                    <span className={styles.infoItem}>
                            <Icon id="bi-grid" width={20} height={20} />
                        {camper.form === "fullyIntegrated" ? "Fully Integrated" : camper.form === "panelTruck" ? "Panel Truck" : camper.form}
                        </span>
                  )}
                  {camper.AC && (
                    <span className={styles.infoItem}>
                            <Icon id="wind" width={20} height={20} />
                            AC
                        </span>
                  )}
                  {camper.kitchen && (
                    <span className={styles.infoItem}>
                            <Icon id="cup-hot" width={20} height={20} />
                            Kitchen
                        </span>
                  )}
                  {camper.bathroom && (
                    <span className={styles.infoItem}>
                            <Icon id="bi-droplet" width={20} height={20} />
                            Bathroom
                        </span>
                  )}
                  {camper.TV && (
                    <span className={styles.infoItem}>
                            <Icon id="tv" width={20} height={20} />
                            TV
                        </span>
                  )}
              </div>
              <Link
                to={`/catalog/${camper.id}`}
                className={styles.showMore}
                target="_blank"
                rel="noopener noreferrer"
              >
                  Show More
              </Link>
          </div>
      </div>
    );
}

export default CamperItem;