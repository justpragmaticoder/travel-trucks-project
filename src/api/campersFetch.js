import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers';

// Thunk to retrieve all campers
export const getAllCampers = createAsyncThunk(
  'campers/getAllCampers',
  async () => {
    const { data } = await axios.get(BASE_URL);
    return data.items;
  }
);

// Thunk to retrieve camper details by ID
export const getCamperDetails = createAsyncThunk(
  'campers/getCamperDetails',
  async (camperId) => {
    const { data } = await axios.get(`${BASE_URL}/${camperId}`);
    return data;
  }
);