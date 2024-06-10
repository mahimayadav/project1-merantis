import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiService {
    API_URL: string = environment.Api_url

    constructor(private http: HttpClient) {
  }

    // ChatBot 
    getCreateSession(data: any) {
        console.log(localStorage.getItem('userToken'),"token")
        return this.http.post(this.API_URL + 'chat/create-session', data, {
            headers: new HttpHeaders({   
                Authorization: 'token ' + JSON.parse(localStorage.getItem('userToken')!)
            })
        });
    }
    getGenerateSessionbyId(id: any, data: any) {
        return this.http.post(this.API_URL + `chat/session/${id}`, data)
            .pipe(map(res => {
                return res;
            }), catchError((error) => this.handleError(error)));
    }

    getquestionByType(data: any) {
        return this.http.post(this.API_URL + 'chat/getQuestionsByType', data, {
            headers: new HttpHeaders({   
                Authorization: 'token ' + JSON.parse(localStorage.getItem('userToken')!)
            })
        });
    }
    getSaveAnswer(data: any) {
        return this.http.post(this.API_URL + 'chat/saveAnswer', data)
            .pipe(map(res => {
                return res;
            }), catchError((error) => this.handleError(error)));
    }
    getGenerateDoc() {
        return this.http.get(this.API_URL + 'chat/generate-doc')
            .pipe(map(res => {
                return res;
            }), catchError((error) => this.handleError(error)));
    }
    getSessionById(id: any) {
        return this.http.get(this.API_URL + `chat/session/${id}`, {
            headers: new HttpHeaders({
                Authorization: 'token ' + JSON.parse(localStorage.getItem('userToken')!)
            })
        });
            // .pipe(map(res => {
            //     return res;
            // }), catchError((error) => this.handleError(error))
        
    }

    createUserAnswer(data: any) {
        return this.http.post(this.API_URL + 'chat/createAnswer',data, {
            headers: new HttpHeaders({
                Authorization: 'token ' + JSON.parse(localStorage.getItem('userToken')!)
            })
        });
            // .pipe(map(res => {
            //     return res;
            // }), catchError((error) => this.handleError(error))
        
    }
    getUpdateSession(id: any, data: any) {
        return this.http.put(this.API_URL + `chat/session//${id}/update`, data)
            .pipe(map(res => {
                return res;
            }), catchError((error) => this.handleError(error)));
    }
    getDeleteSession(id: any) {
        return this.http.delete(this.API_URL + `chat/session/${id}/delete`)
            .pipe(map(res => {
                return res;
            }), catchError((error) => this.handleError(error)));
    }
    getSessionLast30days() {
        return this.http.get(this.API_URL + 'chat/sessionForLast30Days')
            .pipe(map(res => {
                return res;
            }), catchError((error) => this.handleError(error)));
    }
    getConversation(data:any) {

        return this.http.post(this.API_URL + 'chat/conversationHistory',data, {
            headers: new HttpHeaders({
                Authorization: 'token ' + JSON.parse(localStorage.getItem('userToken')!)
            })
        });
    }

    //   Consultant Report

    getAllConsultantReport() {
        return this.http.get(this.API_URL + 'consultantReport/get')
            .pipe(map(res => {
                return res;
            }), catchError((error) => this.handleError(error)));
    }
    getCreateConsultantReport(data: any) {
        return this.http.post(this.API_URL + 'consultantReport', data)
            .pipe(map(res => {
                return res;
            }), catchError((error) => this.handleError(error)));
    }
    getReportById(id: any) {
        return this.http.get(this.API_URL + `consultantReport/${id}`)
            .pipe(map(res => {
                return res;
            }), catchError((error) => this.handleError(error)));
    }
    getUpdateReportById(id: any, data: any) {
        return this.http.put(this.API_URL + `consultantReport/${id}/put`, data)
            .pipe(map(res => {
                return res;
            }), catchError((error) => this.handleError(error)));
    }
    getDeleteReportById(id: any) {
        return this.http.delete(this.API_URL + `consultantReport/${id}/delete`)
            .pipe(map(res => {
                return res;
            }), catchError((error) => this.handleError(error)));
    }

    // User Report
    getAllUserReport() {
        return this.http.get(this.API_URL + 'userReport/get')
            .pipe(map(res => {
                return res;
            }), catchError((error) => this.handleError(error)));
    }
    getUserReportById(id: any) {
        return this.http.get(this.API_URL + `userReport/${id}`)
            .pipe(map(res => {
                return res;
            }), catchError((error) => this.handleError(error)));
    }
    getCreateUserReport(data: any) {
        return this.http.post(this.API_URL + 'userReport', data)
            .pipe(map(res => {
                return res;
            }), catchError((error) => this.handleError(error)));
    }
    getUpdateUserReport(id: any, data: any) {
        return this.http.put(this.API_URL + `userReport/${id}/put`, data)
            .pipe(map(res => {
                return res;
            }), catchError((error) => this.handleError(error)));
    }
    getDeleteUserReport(id: any) {
        return this.http.delete(this.API_URL + `userReport/${id}/delete`)
            .pipe(map(res => {
                return res;
            }), catchError((error) => this.handleError(error)));
    }
    //   Upload Report

    getUploadReport(data: any) {
        return this.http.post(this.API_URL + 'docs/upload', data, {
            headers: new HttpHeaders({
                Authorization: 'token ' + JSON.parse(localStorage.getItem('userToken')!)
            })
        });
    }

    getSessionReportUpload(data: any) {
        return this.http.post(this.API_URL + 'chat/sessionFiles', data, {
            headers: new HttpHeaders({
                Authorization: 'token ' + JSON.parse(localStorage.getItem('userToken')!)
            })
        });
    }
    


    //   Question
    getCreateUserQuestion(data: any) {
        return this.http.post(this.API_URL + 'prompt', data)
            .pipe(map(res => {
                return res;
            }), catchError((error) => this.handleError(error)));
    }
    getUserAllQuestion() {
        return this.http.get(this.API_URL + 'prompt/user')
            .pipe(map(res => {
                return res;
            }), catchError((error) => this.handleError(error)));
    }
    getUserQuestionById(id: any) {
        return this.http.get(this.API_URL + `prompt/${id}`)
            .pipe(map(res => {
                return res;
            }), catchError((error) => this.handleError(error)));
    }
    getUpdateUserQuestionById(id: any, data: any) {
        return this.http.put(this.API_URL + `prompt/${id}/put`, data)
            .pipe(map(res => {
                return res;
            }), catchError((error) => this.handleError(error)));
    }
    getDeleteUserQuestionById(id: any) {
        return this.http.delete(this.API_URL + `prompt/${id}/delete`)
            .pipe(map(res => {
                return res;
            }), catchError((error) => this.handleError(error)));
    }
    getMLALQuestion() {
        return this.http.get(this.API_URL + 'prompt/ml')
            .pipe(map(res => {
                return res;
            }), catchError((error) => this.handleError(error)));
    }
    getMLALQuestionById(id: any) {
        return this.http.get(this.API_URL + `prompt/ml/${id}`)
            .pipe(map(res => {
                return res;
            }), catchError((error) => this.handleError(error)));
    }
    getUpdateMLALQuestionById(id: any, data: any) {
        return this.http.put(this.API_URL + `prompt/ml/${id}/put`, data)
            .pipe(map(res => {
                return res;
            }), catchError((error) => this.handleError(error)));
    }
    getDeleteMLALQuestionById(id: any) {
        return this.http.delete(this.API_URL + `prompt/ml/${id}/delete`)
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