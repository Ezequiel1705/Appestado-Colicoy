import { createSlice } from "@reduxjs/toolkit";
import { PRODUCTS } from "../../Data/products";

const initialState = {
    value: {
        products: PRODUCTS,
        productsByCategory: [],
        productSelected: {},
    }
}


export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProductByCategory: (state, action) => {
            const productsFiltered = state.value.products.filter(product => product.category === action.payload)
            state.value.productsByCategory = productsFiltered
        },
        setProductSelected: (state, action) => {
            const productSelected = state.value.productsByCategory.find(product => product.id === action.payload)
            state.value.productSelected = productSelected
        }
    }
})

export const {setProductSelected, setProductByCategory} = productSlice.actions

export default productSlice.reducer