import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConfigurationService {
    isViewOnly: boolean = true;
}