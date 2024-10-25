import { useSelector, useDispatch } from "react-redux";
import {
  setLocation,
  setType,
  setHasAC,
  setHasKitchen,
  setHasBathroom,
  setHasTV,
  setTransmission,
} from "../../redux/filtersSlice";
import { setFilteredCampers } from "../../redux/campersSlice";
import { resetFilters } from "../../redux/filtersSlice";
import styles from "./CamperFilters.module.css";
import { Icon } from "../Icon/icon.jsx";

const CamperFilters = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector((state) => state.filters);

  // Update filter state based on user input
  const updateFilter = (e) => {
    const { name, value, checked, type } = e.target;
    if (type === "checkbox") {
      switch (name) {
        case "hasAC":
          dispatch(setHasAC(checked));
          break;
        case "hasKitchen":
          dispatch(setHasKitchen(checked));
          break;
        case "hasBathroom":
          dispatch(setHasBathroom(checked));
          break;
        case "hasTV":
          dispatch(setHasTV(checked));
          break;
        case "isAutomatic":
          dispatch(setTransmission(checked ? "automatic" : ""));
          break;
        default:
          break;
      }
    } else {
      dispatch(name === "location" ? setLocation(value) : setType(value));
    }
  };

  // Submit filters form
  const applyFilters = (e) => {
    e.preventDefault();
    dispatch(setFilteredCampers(currentFilters));
    dispatch(resetFilters());
  };

  return (
    <div className={styles.filterContainer}>
      <form onSubmit={applyFilters}>
        <div className={styles.locationLabelText}>Location</div>
        <div className={styles.locationFieldWrapper}>
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={currentFilters.location}
            onChange={updateFilter}
            className={styles.locationField}
          />
          <Icon id="map" className={styles.iconWrapper} />
        </div>

        <div className={styles.filterLabel}>Filters</div>

        <div className={styles.filterBlock}>
          <div className={styles.filterHeader}>Vehicle equipment</div>
          <div className={styles.checkboxWrapper}>
            <label
              className={`${styles.checkboxContainer} ${
                currentFilters.hasAC ? styles.activeCheckbox : ""
              }`}
            >
              <Icon id="wind" width={32} height={32} />
              <input
                type="checkbox"
                name="hasAC"
                checked={currentFilters.hasAC}
                onChange={updateFilter}
              />
              AC
            </label>
            <label
              className={`${styles.checkboxContainer} ${
                currentFilters.transmission === "automatic"
                  ? styles.activeCheckbox
                  : ""
              }`}
            >
              <Icon id="diagram" width={32} height={32} />
              <input
                type="checkbox"
                name="isAutomatic"
                checked={currentFilters.transmission === "automatic"}
                onChange={updateFilter}
              />
              Automatic
            </label>
            <label
              className={`${styles.checkboxContainer} ${
                currentFilters.hasKitchen ? styles.activeCheckbox : ""
              }`}
            >
              <Icon id="cup-hot" width={32} height={32} />
              <input
                type="checkbox"
                name="hasKitchen"
                checked={currentFilters.hasKitchen}
                onChange={updateFilter}
              />
              Kitchen
            </label>
            <label
              className={`${styles.checkboxContainer} ${
                currentFilters.hasTV ? styles.activeCheckbox : ""
              }`}
            >
              <Icon id="tv" width={32} height={32} />
              <input
                type="checkbox"
                name="hasTV"
                checked={currentFilters.hasTV}
                onChange={updateFilter}
              />
              TV
            </label>
            <label
              className={`${styles.checkboxContainer} ${
                currentFilters.hasBathroom ? styles.activeCheckbox : ""
              }`}
            >
              <Icon id="bi-droplet" width={32} height={32} />
              <input
                type="checkbox"
                name="hasBathroom"
                checked={currentFilters.hasBathroom}
                onChange={updateFilter}
              />
              Bathroom
            </label>
          </div>
        </div>

        <div className={styles.filterBlock}>
          <div className={styles.filterHeader}>Vehicle type</div>

          <div className={styles.checkboxWrapper}>
            <label
              className={`${styles.checkboxContainer} ${styles.checkboxContainerCompact} ${
                currentFilters.type === "panelTruck" ? styles.activeCheckbox : ""
              }`}
            >
              <Icon id="bi-grid-1x2" width={32} height={32} />
              <input
                type="radio"
                name="type"
                value="panelTruck"
                checked={currentFilters.type === "panelTruck"}
                onChange={updateFilter}
              />
              Panel Truck
            </label>
            <label
              className={`${styles.checkboxContainer} ${styles.checkboxContainerCompact} ${
                currentFilters.type === "fullyIntegrated"
                  ? styles.activeCheckbox
                  : ""
              }`}
            >
              <Icon id="bi-grid" width={32} height={32} />
              <input
                type="radio"
                name="type"
                value="fullyIntegrated"
                checked={currentFilters.type === "fullyIntegrated"}
                onChange={updateFilter}
              />
              Fully integrated
            </label>
            <label
              className={`${styles.checkboxContainer} ${
                currentFilters.type === "alcove" ? styles.activeCheckbox : ""
              }`}
            >
              <Icon id="bi-grid-3x3-gap" width={32} height={32} />
              <input
                type="radio"
                name="type"
                value="alcove"
                checked={currentFilters.type === "alcove"}
                onChange={updateFilter}
              />
              Alcove
            </label>
          </div>
        </div>
        <button className={styles.applyButton} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default CamperFilters;