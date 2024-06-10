import {Injectable} from '@angular/core';
import {HttpHeaders, HttpClient, HttpRequest, HttpEvent, HttpEventType} from '@angular/common/http';
import {Observable, BehaviorSubject, of} from 'rxjs';
import { environment } from 'src/environments/environment';
// import { SharedService } from './shared.service';
import { AppConstants } from '../app.constant';


@Injectable({
  providedIn: 'root'
})
export class HttpHelperService {


    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };
    httpOptions1 = {
        headers: new HttpHeaders({
            'Authorization': 'token ' + sessionStorage.getItem('userToken')
        })
    };
    httpOptions3 = {
        headers: new HttpHeaders({
            'Authorization': 'token ' + sessionStorage.getItem('adminToken')
        })
    };
    

    httpOptions2 = {
        headers: new HttpHeaders({
          'Authorization': 'token' + sessionStorage.getItem('consultantToken')
        })
      };
      
    path: any;
    pathOne:any;

    constructor(private http: HttpClient) { }

    authenticate(data: any) {
        return this.http.post(environment.Api_url + 'api/auth/user/login', data, this.httpOptions)
    }

    /**
     * Function to calculate IGST, CGST SGST
     * @param percent entered tax percentage
     * @param total invoice value
    */

    setSessionStorage(storageKey: string, value: any) {
        window.sessionStorage.setItem(storageKey, JSON.stringify(value));
    }

    getSessionStorage(storageKey: string): Observable<any> {
        this.path = window.sessionStorage.getItem(storageKey);
        return of(JSON.parse(this.path));
    }

    removeSessionStorage(storageKey: string) {
        window.sessionStorage.removeItem(storageKey);
    }

    signup(data: any) {
      return this.http.post(environment.Api_url + 'api/auth/user/sign_up', data)
    }

    getData(method:any, url:any, options:any): Observable<any> {
        let headers;
        // const user:any = this.sharedService.getSessionStorage(AppConstants.STORAGE_KEYS.INFO);
        // if (user.value) {
        //     headers = {
        //         Authorization: 'token ' + user['value']['token']
        //     };
        // }
      let data;
      let domain = 'https://api.merantis.com/';
      if (options !== undefined) {
          if (options.headers !== undefined) {
              headers = options.headers;
          }
          if (options.data !== undefined) {
              data = options.data;
          }
          if (options.addDomain !== undefined) {
              if (options.addDomain === true) {
                  if (options.domain !== undefined) {
                      domain = options.domain; // => enable while prod build
                  } else {
                      domain = 'https://api.merantis.com/';
                  }
              }
          }
      }

      const httpOptions = {
      headers: new HttpHeaders(headers)
      };
      const endpoint = 'https://api.merantis.com/' + url;
      if (method === 'GET') {
           return this.http.get(endpoint, httpOptions);
      } else if (method === 'POST') {
          return this.http.post(endpoint, data, httpOptions);
      } else if (method === 'PUT') {
          return this.http.put(endpoint, data, httpOptions);
      } else {
          return this.http.delete(endpoint, httpOptions);
      }
    }

}
