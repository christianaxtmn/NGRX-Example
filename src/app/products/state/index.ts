import * as AppState from '../../store/app.state';
import {ProductState} from './product.reducer';

export * from './product.selectors';

export interface State extends AppState.State {
  products: ProductState;
}

