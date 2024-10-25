import { Icon } from "../Icon/icon.jsx";
import styles from "./CamperFacilities.module.css";

const CamperFacilities = ({ camper }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.camperAttributes}>
          {camper.transmission && (
            <span className={styles.attributeItem}>
                            <Icon id="diagram" width={20} height={20} />
              {camper.transmission}
                        </span>
          )}
          {camper.engine && (
            <span className={styles.attributeItem}>
                            <Icon id="fuel-pump" />
              {camper.engine}
                        </span>
          )}
          {camper.AC && (
            <span className={styles.attributeItem}>
                            <Icon id="wind" width={20} height={20} />
                            AC
                        </span>
          )}
          {camper.bathroom && (
            <span className={styles.attributeItem}>
                            <Icon id="toilet" width={20} height={20} />
                            Bathroom
                        </span>
          )}
          {camper.kitchen && (
            <span className={styles.attributeItem}>
                            <Icon id="cup-hot" width={20} height={20} />
                            Kitchen
                        </span>
          )}
          {camper.TV && (
            <span className={styles.attributeItem}>
                            <Icon id="tv" width={20} height={20} />
                            TV
                        </span>
          )}
          {camper.radio && (
            <span className={styles.attributeItem}>
                            <Icon id="radio" width={20} height={20} />
                            Radio
                        </span>
          )}
          {camper.refrigerator && (
            <span className={styles.attributeItem}>
                            <Icon id="fridge" width={20} height={20} />
                            Refrigerator
                        </span>
          )}
          {camper.microwave && (
            <span className={styles.attributeItem}>
                            <Icon id="microwave" width={20} height={20} />
                            Microwave
                        </span>
          )}
          {camper.gas && (
            <span className={styles.attributeItem}>
                            <Icon id="gas" width={20} height={20} />
                            Gas
                        </span>
          )}
          {camper.water && (
            <span className={styles.attributeItem}>
                            <Icon id="bi-droplet" width={20} height={20} />
                            Water
                        </span>
          )}
        </div>
        <div className={styles.camperAttributes}>
          <h3 className={styles.detailsHeader}>camper Specifications</h3>
          <div className={styles.detailsList}>
            <div className={styles.detailsItem}>
              <div className={styles.itemLabel}>Form</div>
              <div className={styles.itemValue}>
                {camper.form === "fullyIntegrated"
                  ? "Fully Integrated"
                  : camper.form === "panelTruck"
                    ? "Panel Truck"
                    : camper.form}
              </div>
            </div>
            <div className={styles.detailsItem}>
              <div className={styles.itemLabel}>Length</div>
              <div className={styles.itemValue}>{camper.length}</div>
            </div>
            <div className={styles.detailsItem}>
              <div className={styles.itemLabel}>Width</div>
              <div className={styles.itemValue}>{camper.width}</div>
            </div>
            <div className={styles.detailsItem}>
              <div className={styles.itemLabel}>Height</div>
              <div className={styles.itemValue}>{camper.height}</div>
            </div>
            <div className={styles.detailsItem}>
              <div className={styles.itemLabel}>Tank</div>
              <div className={styles.itemValue}>{camper.tank}</div>
            </div>
            <div className={styles.detailsItem}>
              <div className={styles.itemLabel}>Consumption</div>
              <div className={styles.itemValue}>{camper.consumption}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CamperFacilities;