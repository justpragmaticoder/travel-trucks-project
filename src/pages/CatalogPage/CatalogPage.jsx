import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCampers } from "../../api/campersFetch";
import styles from "./CatalogPage.module.css";
import { IconSource } from "../../components/Icon/icon.jsx";
import CamperFilters from "../../components/CamperFilter/CamperFilters.jsx";
import CamperList from "../../components/CamperList/CamperList";

const CatalogPage = () => {
  const dispatch = useDispatch();

  const { paginatedCampers, filteredList } = useSelector(
    (state) => state.campers
  );

  const hasMoreCampers = filteredList.length > paginatedCampers.length;

  // Fetch campers
  useEffect(() => {
    dispatch(getAllCampers());
  }, [dispatch]);

  return (
    <>
      <div className={styles.catalogPage}>
        <CamperFilters />
        <CamperList campers={paginatedCampers} hasMore={hasMoreCampers} />
      </div>
      <IconSource />
    </>
  );
};

export default CatalogPage;
