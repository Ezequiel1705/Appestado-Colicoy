import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from '../Features/Categories'
import productsReducer from '../Features/Products'

const store = configureStore({
    reducer:{
        categories: categoriesReducer,
        products: productsReducer,
    }
})

export default store;