import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from './storageService';

@Injectable({
    providedIn: 'root'
})
export class GlobalService {
  
    public userToken: BehaviorSubject<string> = new BehaviorSubject('');
    
    constructor() {
        if (StorageService.getItem('userToken')) {
            this.setAccessToken(StorageService.getItem('userToken'));
        }
    }

    public getAccessToken() {
        return StorageService.getItem('userToken');
    }

    public setAccessToken(item: any) {
        StorageService.setItem('userToken', item);
        this.userToken.next(item);
    }


}
