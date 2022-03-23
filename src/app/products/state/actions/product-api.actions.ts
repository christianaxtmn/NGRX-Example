import {createAction, props} from '@ngrx/store';
import {Product} from '../../product';

export const loadProductsSuccess = createAction(
  '[Product] Load Success',
  props<{ products: Product[]}>()
);

export const loadProductsFailure = createAction(
  '[Product] Load Fail',
  props<{ error: string }>()
);

export const updateProductSuccess = createAction(
  '[Product] Update Product Success',
  props<{ product: Product}>()
);

export const updateProductFailure = createAction(
  '[Product] Update Product Fail',
  props<{ error: string}>()
);
