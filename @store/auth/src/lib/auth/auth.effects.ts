import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from '@data/auth';
import { switchMap, map, catchError, of } from "rxjs";
import { AuthActions } from "./auth.actions";


export const login$ = createEffect(() => {
    const actions$ = inject(Actions);
    const authService = inject(AuthService);

    return actions$.pipe(
        ofType(AuthActions.login),
        switchMap(({email, password}) => authService.login(email, password).pipe(
            map(token => AuthActions.loginSuccess({token})),
            catchError(() => of(AuthActions.loginFailure())),
        )),
    );
}, {functional: true});