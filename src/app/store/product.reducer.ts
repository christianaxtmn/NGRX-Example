import { createReducer, on } from '@ngrx/store';
import {Product} from '../products/product';
import { ProductApiActions, ProductPageActions } from './actions';
import {AppState} from "./app.state";


const initialState: AppState = {
  showProductCode: true,
  currentProductId: null,
  products: [],
  error: ''
};

export const appReducer = createReducer<AppState>(
  initialState,
  on(ProductPageActions.toggleProductCode, (state): AppState => {
    return {
      ...state,
      showProductCode: !state.showProductCode
    };
  }),
  on(ProductPageActions.setCurrentProduct, (state, actions): AppState => {
    return {
      ...state,
      currentProductId: actions.currentProductId
    };
  }),
  on(ProductPageActions.clearCurrentProduct, (state): AppState => {
    return {
      ...state,
      currentProductId: null
    };
  }),
  on(ProductPageActions.initializeCurrentProduct, (state): AppState => {
    return {
      ...state,
      currentProductId: 0
    };
  }),
  on(ProductApiActions.loadProductsSuccess, (state, action): AppState => {
    return {
      ...state,
      products: action.products
    };
  }),
  on(ProductApiActions.loadProductsFailure, (state, action ): AppState => {
    return {
      ...state,
      products: [],
      error: action.error
    };
  }),
  on(ProductApiActions.updateProductSuccess, (state, action): AppState => {
    const updatetProducts = state.products.map(
      item => action.product.id === item.id ? action.product : item
    );
    return {
      ...state,
      products: updatetProducts,
      currentProductId: action.product.id,
      error: ''
    };
  }),
  on(ProductApiActions.updateProductFailure, (state, action): AppState => {
    return {
      ...state,
      error: action.error
    };
  }),
);
