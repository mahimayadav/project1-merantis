import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {
  API_URL: string = environment.Api_url

  constructor(private http: HttpClient) {
  }

  signupConsultant(data: any) {
    return this.http.post(this.API_URL + 'auth/consultant/signup', data)
      .pipe(map(res => {
        return res;
      }), catchError((error) => this.handleError(error)));
  }

  signinConsultant(data: any) {
    return this.http.post(this.API_URL + 'auth/consultant/signin', data)
      .pipe(map(res => {
        return res;
      }), catchError((error) => this.handleError(error)));
  }

  signup(data: any) {
    return this.http.post(this.API_URL + 'auth/signup', data)
      .pipe(map(res => {
        return res;
      }), catchError((error) => this.handleError(error)));
  }

  signin(data: any) {
    return this.http.post(this.API_URL + 'auth/signin', data)
      .pipe(map(res => {
        return res;
      }), catchError((error) => this.handleError(error)));
  }

  forgotPass(data: any) {
    return this.http.post(this.API_URL + 'auth/forgot-password', data)
      .pipe(map(res => {
        return res;
      }), catchError((error) => this.handleError(error)));
  }

  resetPass(id: any,data:any) {
    return this.http.post(this.API_URL + `auth/reset-password/${id}`,data)
      .pipe(map(res => {
        return res;
      }), catchError((error) => this.handleError(error)));
  }

  handleError(error: any) {
    let errorMessage = '';
    console.log('error ->', error);
    // this.loader$.next(false);
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.response;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return of(error?.error)
    // return throwError(error.error);

  }

}