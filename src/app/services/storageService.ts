import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { 
    console.log(sessionStorage.getItem('adminToken'),"token", sessionStorage.getItem('userToken'),sessionStorage.getItem('consultantToken'))
  }

static getItem(key: string) {
  if(sessionStorage.getItem('userToken')){
    return sessionStorage.getItem('userToken')
  }
  else {
    return sessionStorage.getItem('userToken')
  }
  }

  static setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static removeItem(key: string) {
    localStorage.removeItem(key);
  }

  static clearAll() {
    localStorage.clear();
  }

  public setUser(user: string) {
    localStorage.setItem('user', user);
  }
}
