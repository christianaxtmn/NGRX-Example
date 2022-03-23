import { createReducer, on } from '@ngrx/store';
import {Product} from '../product';
import { ProductApiActions, ProductPageActions } from './actions';


export interface ProductState {
  showProductCode: boolean;
  currentProductId: number | null;
  products: Product[];
  error: string;
}

const initialState: ProductState = {
  showProductCode: true,
  currentProductId: null,
  products: [],
  error: ''
};

export const productReducer = createReducer<ProductState>(
  initialState,
  on(ProductPageActions.toggleProductCode, (state): ProductState => {
    return {
      ...state,
      showProductCode: !state.showProductCode
    };
  }),
  on(ProductPageActions.setCurrentProduct, (state, actions): ProductState => {
    return {
      ...state,
      currentProductId: actions.currentProductId
    };
  }),
  on(ProductPageActions.clearCurrentProduct, (state): ProductState => {
    return {
      ...state,
      currentProductId: null
    };
  }),
  on(ProductPageActions.initializeCurrentProduct, (state): ProductState => {
    return {
      ...state,
      currentProductId: 0
    };
  }),
  on(ProductApiActions.loadProductsSuccess, (state, action): ProductState => {
    return {
      ...state,
      products: action.products
    };
  }),
  on(ProductApiActions.loadProductsFailure, (state, action ): ProductState => {
    return {
      ...state,
      products: [],
      error: action.error
    };
  }),
  on(ProductApiActions.updateProductSuccess, (state, action): ProductState => {
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
  on(ProductApiActions.updateProductFailure, (state, action): ProductState => {
    return {
      ...state,
      error: action.error
    };
  }),
);
