import { createSlice } from '@reduxjs/toolkit';
import { getAllCampers, getCamperDetails } from '../api/campersFetch';

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    list: [], // List of all campers
    filteredList: [], // Filtered campers
    paginatedCampers: [], // Campers displayed based on pagination
    status: 'idle', // idle, loading, succeeded, failed
    error: null,
    page: 1,
    itemsPerPage: 4,
  },
  reducers: {
    setCampers(state, action) {
      state.list = action.payload;
      state.filteredList = action.payload;
      state.page = 1; // Reset page when new data is set
      try {
        state.paginatedCampers = state.filteredList.slice(0, state.itemsPerPage); // Initial paginated results
      } catch (error) {
        state.error = error.message;
      }
    },

    setFilteredCampers: (state, action) => {
      const filters = action.payload;
      state.filteredList = state.list.filter((camper) => {
        return (
          (!filters.location || camper.location.toLowerCase().includes(filters.location.toLowerCase())) &&
          (!filters.type || camper.form === filters.type) &&
          (!filters.hasAC || camper.AC === filters.hasAC) &&
          (!filters.hasKitchen || camper.kitchen === filters.hasKitchen) &&
          (!filters.hasBathroom || camper.bathroom === filters.hasBathroom) &&
          (!filters.hasTV || camper.TV === filters.hasTV) &&
          (!filters.transmission || camper.transmission === "automatic")
        );
      });
      state.page = 1; // Reset page on new filter
      state.paginatedCampers = state.filteredList.slice(0, state.itemsPerPage); // First page of filtered results
    },

    loadMoreCampers: (state) => {
      state.page += 1;
      const nextItems = state.filteredList.slice(0, state.page * state.itemsPerPage);
      state.paginatedCampers = nextItems;
    },

    resetFilteredList(state) {
      state.filteredList = []; // Reset filteredList to empty array when filters are reset state.list;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle getAllCampers loading state
      .addCase(getAllCampers.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      // Handle getAllCampers success state
      .addCase(getAllCampers.fulfilled, (state, action) => {
        state.list = action.payload;
        state.filteredList = action.payload;
        state.page = 1; // Reset page when new data is set
        state.paginatedCampers = state.filteredList.slice(0, state.itemsPerPage); // Initial paginated results
        state.status = 'succeeded';
      })
      // Handle getAllCampers error state
      .addCase(getAllCampers.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = 'failed';
      })
      // Handle getCamperDetails loading state
      .addCase(getCamperDetails.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      // Handle getCamperDetails success state
      .addCase(getCamperDetails.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = 'succeeded';
      })
      // Handle getCamperDetails error state
      .addCase(getCamperDetails.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = 'failed';
      });
  },
});

export const { setCampers, setFilteredCampers, resetFilteredList, loadMoreCampers } = campersSlice.actions;

export default campersSlice.reducer;
