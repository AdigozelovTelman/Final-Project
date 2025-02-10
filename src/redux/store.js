import { configureStore } from "@reduxjs/toolkit";
import  productSlice  from "./reducers/productSlice";
import  basketSlice  from "./reducers/basketSlice";
import wishlistSlice from "./reducers/wishlistSlice";
import  trproductSlice  from "./reducers/trproductSlice";
import  rusproductSlice  from "./reducers/rusproductSlice";
import  usaqproductSlice  from "./reducers/usaqbookSlice";
import  ingproductSlice  from "./reducers/ingproducts";

export const store = configureStore({
    reducer:{
        products:productSlice,
        basket:basketSlice,
        wishlist:wishlistSlice,
        trproducts:trproductSlice,
        rusproducts:rusproductSlice,
        ingproducts:ingproductSlice,
        usaqproducts:usaqproductSlice
    }
})