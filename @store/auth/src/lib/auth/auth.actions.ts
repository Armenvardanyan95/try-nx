import { createActionGroup, emptyProps, props } from "@ngrx/store";

export const AuthActions = createActionGroup({
    source: 'Auth',
    events: {
        login: props<{ email: string, password: string }>(),
        loginSuccess: props<{ token: string }>(),
        loginFailure: emptyProps(),
        logout: emptyProps(),
    },
});