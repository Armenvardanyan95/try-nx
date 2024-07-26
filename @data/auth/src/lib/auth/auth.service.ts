import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AuthService {
    login(email: string, password: string): Observable<string> {
        return of('token');
    }

    logout(): void {
        // TODO
    }
}