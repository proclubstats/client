import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    SERVER_URL = "http://localhost:3000/";

    constructor() { }

    async get<T>(path: string, params: any = {}): Promise<AxiosResponse<T, any>> {
        return await axios.get(this.SERVER_URL + path, params);
    }

    async patch<T>(path: string, params: any = {}): Promise<AxiosResponse<T, any>> {
        return await axios.patch(this.SERVER_URL + path, params);
    }

    async post<T>(path: string, params: any = {}): Promise<AxiosResponse<T, any>> {
        return await axios.post(this.SERVER_URL + path, params);
    }

    async delete<T>(path: string, params: any = {}): Promise<AxiosResponse<T, any>> {
        return await axios.delete(this.SERVER_URL + path, params);
    }

    async put<T>(path: string, params: any = {}): Promise<AxiosResponse<T, any>> {
        return await axios.put(this.SERVER_URL + path, params);
    }
}