import {createAction, props} from '@ngrx/store';
import {Product} from '../../product';

export const toggleProductCode = createAction(
  '[Product] Toggle Product Code'
);

export const setCurrentProduct = createAction(
  '[Product] Set Current Product',
  props<{ currentProductId: number }>()
);

export const clearCurrentProduct = createAction(
  '[Product Page] Toggle Product Code'
);

export const initializeCurrentProduct = createAction(
  '[Product Page] Initialize Current Product'
);

export const loadProducts = createAction(
  '[Product Page] Load'
);

export const updateProduct = createAction(
  '[Product Page] Update Product',
  props<{ product: Product}>()
);


