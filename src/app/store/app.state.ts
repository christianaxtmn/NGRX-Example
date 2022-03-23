import {Product} from "../products/product";

export interface AppState {
  showProductCode: boolean;
  currentProductId: number | null;
  products: Product[];
  error: string;
}

