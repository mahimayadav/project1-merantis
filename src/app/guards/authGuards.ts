import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Observable, of } from 'rxjs';
import { StorageService } from '../services/storageService';

// @Injectable({
//   providedIn: 'root'
// })
// export class SharedService {

//   url: any = '';

//   constructor() { }

//   setSessionStorage(storageKey: string, value: any) {
//     window.sessionStorage.setItem(storageKey, JSON.stringify(value));
//   }
//   getSessionStorage(storageKey: string): Observable<any> {

//     this.url = window.sessionStorage.getItem(storageKey);
    
//       return of(JSON.parse(this.url));
//   }
//   removeSessionStorage(storageKey: string) {
//       window.sessionStorage.removeItem(storageKey);
//   }

// }
// export const AuthGuard: CanActivateFn = (
//   route: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot
// ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {

//   const router: Router = inject(Router);
  const tokenStorage: StorageService = inject(StorageService);

  // if (tokenStorage.isTokenExpired()) {
  //   return router.navigate(['forbidden']);    
  // }
  // else {
  //   const roles = route.data['permittedRoles'] as Array<string>;
  //   const userRole = tokenStorage.getItem();

  //   if (roles && !roles.includes(userRole)) {
  //     return router.navigate(['login']);
  //   }
  //   else
  //     return true;
  // }

// }
