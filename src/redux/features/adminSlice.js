import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../apiRoute/api";

//all admin products
export const productsAdmin = createAsyncThunk(
  "/admin/products",
  async (__, { rejectWithValue }) => {
    try {
      const res = await api.allAdminProducts();
      return res.data;
    } catch (error) {
      return rejectWithValue(error.res.data);
    }
  }
);

//add product
export const addAdminProduct = createAsyncThunk(
  "/create/product",
  async ({formData,toast,navigate}, { rejectWithValue }) => {
    try {
      const res = await api.addProduct(formData);
      toast.success(res.data.message || "product create successfully!")
      navigate("/admin-hamrobazar-dashboard-panel")
      return res.data;
    } catch (error) {
      return rejectWithValue(error.res.data);
    }
  }
);

//delete product
export const deleteAdminProduct = createAsyncThunk(
    "/delete/product",
    async ({id,toast},{ rejectWithValue,dispatch }) => {
      try {
        const res = await api.deleteProduct(id);
        toast.success(res.data.message || "product delete successFully!")
        dispatch(productsAdmin())
        return res.data;
      } catch (error) {
        return rejectWithValue(error.res.data);
      }
    }
  );

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    loading: "",
    error: "",
    message: "",
    adminProducts: [],
    adminProduct:{}
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(productsAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(productsAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.adminProducts = action.payload.data;
      })
      .addCase(productsAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(addAdminProduct.pending,(state)=>{
        state.loading = true
      })
      .addCase(addAdminProduct.fulfilled,(state,action)=>{
        state.loading = false;
        state.adminProduct = action.payload
      })
      .addCase(addAdminProduct.rejected,(state,action)=>{
        state.loading = false;
        state.error = action.payload.message
      })
      .addCase(deleteAdminProduct.pending,(state)=>{
        state.loading = true;
      })
      .addCase(deleteAdminProduct.fulfilled,(state,action)=>{
        state.loading = false;
        state.adminProduct = action.payload;
      })
      .addCase(deleteAdminProduct.rejected,(state,action)=>{
        state.loading = false;
        state.error = action.payload.message;
      })
  },
});

export const { clearError } = adminSlice.actions;
export default adminSlice.reducer;
