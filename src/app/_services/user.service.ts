import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models';
import { environment } from '../_enviroment';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) {}

    getAll() {
        // return this.http.get<User[]>(`${config.apiUrl}/users`);
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }

    // getById(id: number) {
    //     return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
    // }
}