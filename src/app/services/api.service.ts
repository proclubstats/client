import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, share } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    SERVER_URL = "http://localhost:3000/";

    constructor() { }

    get(path: string, params: any = {}): Promise<any> {
        const observable = axios.get(this.SERVER_URL + path, params);

        return observable;
    }

    post(path: string, params: any = {}): Promise<any> {
        const observable = axios.post(this.SERVER_URL + path, params);

        return observable;
    }

    delete(path: string, params: any = {}): Promise<any> {
        const observable = axios.delete(this.SERVER_URL + path, params);

        return observable;
    }
}