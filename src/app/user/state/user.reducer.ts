import {createAction, createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';

export interface UserState {
  maskUserName: boolean;
}

const initialState: UserState = {
  maskUserName: true
};

const getUserFeatureState = createFeatureSelector<UserState>('user');

export const getMaskUserName = createSelector(
  getUserFeatureState,
  state => state.maskUserName
);


export const userReducer = createReducer<UserState>(
  initialState,
  on(createAction('[User] Toggle maskUserName'), (state) => {
    return {
      ...state,
      maskUserName: !this.state.maskUserName
    };
  })
);
