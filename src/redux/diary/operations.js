import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = `
 https://power-pulse-back.onrender.com/`;

export const fetchDiary = createAsyncThunk(
  'user/diary',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`diary`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
