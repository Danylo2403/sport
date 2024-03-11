import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAddExercise,
  fetchAddProduct,
  fetchDeleteExercise,
  fetchDeleteProduct,
  fetchDiary,
} from './operations';

// const handlePending = state => {
//   state.isLoading = true;
// };

// new Date(new Date().setDate(new Date().getDate() + 1))
//     .toISOString()
//     .split('T', 1)[0]
//     .split('-')
//     .reverse()
//     .join('-'),

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

const initialState = {
  date: new Date()
    .toISOString()
    .split('T', 1)[0]
    .split('-')
    .reverse()
    .join('-'),
  products: [],
  exercises: [],
};

const diarySlice = createSlice({
  name: 'diary',
  initialState,
  reducers: {
    setDate: (state, action) => {
      state.date = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchDiary.fulfilled, (state, action) => {
      state.products = action.payload.addProducts;
      state.exercises = action.payload.addExercises;
    });
    builder.addCase(fetchAddProduct.fulfilled, (state, action) => {
      state.products = action.payload.data.addProducts;
    });
    builder.addCase(fetchAddExercise.fulfilled, (state, action) => {
      state.exercises = action.payload.data.addExercises;
    });
    builder.addCase(fetchDeleteProduct.fulfilled, (state, action) => {
      const index = state.products.findIndex(el => el._id === action.meta.arg);
      state.products.splice(index, 1);
    });
    builder.addCase(fetchDeleteExercise.fulfilled, (state, action) => {
      const index = state.exercises.findIndex(el => el._id === action.meta.arg);

      state.exercises.splice(index, 1);
    });
  },
});

export const { setDate } = diarySlice.actions;
export const diaryReducer = diarySlice.reducer;
