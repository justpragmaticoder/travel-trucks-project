import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCamperDetails } from "../../api/campersFetch";
import Loader from "../../components/Loader/Loader";
import styles from "./CamperDetailPage.module.css";
import { IconSource } from "../../components/Icon/icon.jsx";
import CamperReviewList from "../../components/CamperReviewList/CamperReviewList.jsx";
import CamperBookingForm from "../../components/CamperBookingForm/CamperBookingForm.jsx";
import CamperFacilities from "../../components/CamperFacilities/CamperFacilities.jsx";
import CamperCard from "../../components/CamperCard/CamperCard.jsx";

function CamperDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector((state) => state.campers.list);
  const status = useSelector((state) => state.campers.status);
  const [activeTab, setActiveTab] = useState("features");

  const handleTabClick = (tab) => {
    setActiveTab(tab); // Update the active tab
  };

  // Fetch camper data based on the ID from the URL
  useEffect(() => {
    dispatch(getCamperDetails(id));
  }, [dispatch, id]);

  return (
    <>
      {status === "loading" && <Loader />}
      {status === "succeeded" &&
        camper &&
        camper.reviews && (
          <div className={styles.container}>
            <CamperCard camper={camper} />
            {/* tabs */}
            <div className={styles.tabs}>
              <div
                className={
                  activeTab === "features"
                    ? `${styles.tab} ${styles.active}`
                    : styles.tab
                }
                onClick={() => handleTabClick("features")}
              >
                Features
              </div>
              <div
                className={
                  activeTab === "reviews"
                    ? `${styles.tab} ${styles.active}`
                    : styles.tab
                }
                onClick={() => handleTabClick("reviews")}
              >
                Reviews
              </div>
            </div>
            <div className={styles.featuresFormContainer}>
              {activeTab === "features" && camper && (
                <CamperFacilities camper={camper} />
              )}

              {activeTab === "reviews" && camper.reviews && (
                <CamperReviewList reviews={camper.reviews} />
              )}

              <CamperBookingForm />
            </div>
          </div> /* container */
        )}
      <IconSource />
    </>
  );
}

export default CamperDetailPage;
