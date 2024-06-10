import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { GlobalService } from '../services/global.service';

@Injectable()
export class TokenServiceService implements HttpInterceptor {
  private requests: HttpRequest<any>[] = [];
  private totalRequests = 0;
private token:any;
  constructor(private globalService: GlobalService) {
  }

  removeRequest(req: HttpRequest<any>) {
    const i = this.requests.indexOf(req);
    if (i >= 0) {
      this.requests.splice(i, 1);
    }
    // this.loaderService.isLoading.next(this.requests.length > 0);
  }

  // constructor(private injector: Injector) { }
  // intercept(req, next) {
  //     let tokenizedReq = req.clone(
  //       {
  //         headers: req.headers.set('Authorization', 'Bearer sdksmnsdjnssejnsnsdsd')
  //       }
  //     )
  //     return next.handle(tokenizedReq)

  // }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    /**
     * Loader Show on Request
     */
    // this.requests.push(req);
    this.totalRequests++;
    // this.loaderService.show();
    /**
     * set the contentType to application/json for every request.
     */
    let contentType = 'application/json';

    /**
     * contentType to multipart/form-data.
     */
    if (req.body instanceof FormData) {
      contentType = 'multipart/form-data';
      // contentType = 'multipart/form-data; boundary=----WebKitFormBoundaryrTyNvA98cQqYBCyi';
    }
    /**
     * Set Header
     */
    let headers: any = { 'Content-Type': contentType,'Accept': 'application/json'}
    
    let commingUrl = req.url

    console.log("comming url",commingUrl,JSON.parse(sessionStorage.getItem('userToken') || '{}'))
   
    if (environment.Api_url=== commingUrl.split('/')[2]) {
      this.token = JSON.parse(sessionStorage.getItem('abdmToken') || '{}')
      
    }
    else if (this.globalService.getAccessToken()) {
      this.token = JSON.parse(this.globalService.getAccessToken() || '{}')
    }

    if(this.token && commingUrl != 'http://13.126.196.94:8092/api/portal/v1/user/login/') {
      headers['Authorization'] = 'Bearer ' + this.token;
    }
  

    const request = req.clone({
      setHeaders: headers
    });
    /**
     * Handle Request
     */
    console.log(req, "aa")
    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if ([200, 201].indexOf(event.status) !== -1) {
            // this.globalService.isMaintenance = false;
          }
        }
      }, err => {
        if (err instanceof HttpErrorResponse) {
          /** Un Authentication Error **/
          if ([401, 403].indexOf(err.status) !== -1) {
            // if (err.status === 401 || err.status === 403 || err.status === 500) {
            // this.globalService.openUnAuthorixationLogin('LoginUnAuthorizationComponent');
          }
          /** Maintenance Error **/
          if (err.status === 503) {
            // this.globalService.isMaintenance = true;
          }
        }
      }),
      finalize(() => {
        // this.removeRequest(req);
        this.totalRequests--;
        if (this.totalRequests === 0) {
          // this.loaderService.hide();
        }
        // this.loaderService.hide();
      })
    );
  }


}

export const HtpInterceptor = [{ provide: HTTP_INTERCEPTORS, useClass: TokenServiceService, multi: true }];
