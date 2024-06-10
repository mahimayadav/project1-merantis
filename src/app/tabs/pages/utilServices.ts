
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map} from 'rxjs/operators';
import Swal from 'sweetalert2';


@Injectable({
    providedIn: 'root'
})


@Injectable({
  providedIn: 'root'
})

export class utilService {

    constructor(private http:HttpClient){}
    getCityStateByPinCode(pinCode: any) {
        return this.http
            .get(`https://api.postalpincode.in/pincode/${pinCode}`).pipe(map(val => {
                const [address] = val as any;
                let arrAddress = address;
                const postOffices = arrAddress.PostOffice;
                if (postOffices.length > 0) {
                    return {
                        state: postOffices[0].State,
                        district: postOffices[0].District,
                        city: postOffices[0].Name
                    }
                }
                return null;
            }))
    }


    confirmDialog(title = 'Are you sure?', text?: any) {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-warning'
            },
            buttonsStyling: true,
        });
        return swalWithBootstrapButtons.fire(
            {
                showCloseButton: true,
                title: title,
                text: text || 'once deleted, you will not able see deleted data',
                width: '432px',
                showCancelButton: true,
                confirmButtonText: 'Yes',
                cancelButtonText: 'No',
                reverseButtons: false,
                
            }
        )
    }


    confirmDialogRequestReview(title1 = 'Request Expert Review', text?: any) {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-warning'
            },
            buttonsStyling: true,
        });
        return swalWithBootstrapButtons.fire(
            {
                showCloseButton: true,
                title: title1,
                text: text || 'Your Report has been send to the Expert for Review ',
                width: '432px',
                showCancelButton: true,
                confirmButtonText: 'Yes',
                cancelButtonText: 'No',
                reverseButtons: false,
                
            }
        )
    }

    confirmDialogCancelReview(title2 = 'Are you sure?', text?: any) {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-warning'
            },
            buttonsStyling: true,
        });
        return swalWithBootstrapButtons.fire(
            {
                showCloseButton: true,
                title: title2,
                text: text || 'You Want to Cancel Request',
                width: '432px',
                showCancelButton: true,
                confirmButtonText: 'Yes',
                cancelButtonText: 'No',
                reverseButtons: false,
                
            }
        )
    }


}
