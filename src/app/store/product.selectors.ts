import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppState} from './app.state';

const getAppState = createFeatureSelector<AppState>('app');

export const getShowProductCode = createSelector(
  getAppState,
  state => state.showProductCode
);

export const getCurrentProductId = createSelector(
  getAppState,
  state => state.currentProductId
);

export const getCurrentProduct = createSelector(
  getAppState,
  getCurrentProductId,
  (state, currentProductId) => {
    if (currentProductId === 0) {
      return {
        id: 0,
        productName: '',
        productCode: 'New',
        description: '',
        starRating: 0
      };
    } else {
      return currentProductId ? state.products.find(p => p.id === currentProductId) : null;
    }

  }
);

export const getProducts = createSelector(
  getAppState,
  state => state.products
);

export const getError = createSelector(
  getAppState,
  state => state.error
);
