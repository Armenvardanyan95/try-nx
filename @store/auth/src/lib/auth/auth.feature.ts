import { createFeature, createReducer, createSelector } from "@ngrx/store";
import { immerOn } from 'ngrx-immer/store';
import { AuthActions } from "./auth.actions";

export type AuthState = {
    token: string | null;
}

export const authReducer = createReducer<AuthState>(
    {token: null},
    immerOn(AuthActions.loginSuccess, (state, {token}) => {
        state.token = token;
    }),
    immerOn(AuthActions.logout, (state) => {
        state.token = null;
    }),
);

export const authFeature = createFeature({
    name: 'auth',
    reducer: authReducer,
    extraSelectors: ({selectToken}) => ({
        selectIsAuth: createSelector(selectToken, (token) => !!token),
    }),
});