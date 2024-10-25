import { useSelector, useDispatch } from "react-redux";
import CamperItem from "../../components/CamperItem/CamperItem";
import styles from "./CamperList.module.css";
import Loader from "../../components/Loader/Loader";
import { loadMoreCampers } from "../../redux/campersSlice";

const CamperList = ({ campers, hasMore }) => {
  const dispatch = useDispatch();
  const camperLoadingStatus = useSelector((state) => state.campers.status);

  const onLoadMore = () => {
    dispatch(loadMoreCampers());
  };

  const renderContent = () => {
    if (camperLoadingStatus === "loading") {
      return <Loader />;
    }

    if (camperLoadingStatus === "succeeded") {
      if (!campers || campers.length === 0) {
        return <p className={styles.messageText}>No campers found</p>;
      }

      return (
        <>
          {campers.map((camper) => (
            <CamperItem key={camper.id} camper={camper} />
          ))}
          {hasMore && (
            <button onClick={onLoadMore} className={styles.loadMoreButton}>
              Load More
            </button>
          )}
        </>
      );
    }

    if (camperLoadingStatus === "failed") {
      return <p className={styles.messageText}>Error loading campers</p>;
    }

    return null;
  };

  return <div className={styles.camperCardsContainer}>{renderContent()}</div>;
};

export default CamperList;