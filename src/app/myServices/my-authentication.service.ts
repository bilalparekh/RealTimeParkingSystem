import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {  Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import {  LoginService } from "./login-service.service";

@Injectable()
export class MyAuthenticationService {

  isLoggedIn: boolean = false;
  redirectUrl: string;

  BookingLocSpaces: FirebaseListObservable<any[]>;

  constructor(public af: AngularFire, public myRoute: Router) {
    this.BookingLocSpaces = this.af.database.list('/BookingLocSpaces');
  }


  // SignInUser(email:string, password:string, userType:string = '') {
  //   if (!email) {
  //     return;
  //   }

  //   else {
  //     this.myLoginService.LoginUser(email, password).then(
  //       loginCred => {
  //         console.log('loginCred', loginCred);
  //         let loginUserUid = loginCred.uid;

  //         const searchUser =  this.myUsersList = this.af.database.list('/MyUsersList', {
  //           query : {
  //             orderByChild: 'uid',
  //             equalTo : loginUserUid
  //           }
  //         });

  //         searchUser.subscribe(foundUser => {
  //           console.log('foundUser', foundUser);
  //           let flag = false;

  //           for (var k = 0; k < foundUser.length; k++) {
  //             if (foundUser[k].userType == userType) {
  //               flag = true;
  //             }
  //           }

  //           if(flag){
  //             this.isLoggedIn = true;
  //             let nextRoute = "";
  //             switch (userType){
  //               case 'Admin User' :
  //                 nextRoute = 'AdminUserPage';
  //                 break;
  //               case 'Company User' :
  //                 nextRoute = 'CompanyUserPage';
  //                 break;
  //               case 'Student' :
  //                 nextRoute = 'StudentsPage';
  //                 break;
  //             }
  //             this.myRoute.navigate([nextRoute]);
  //           } else {
  //             alert('This user is not authorized to access this functionality.');
  //             return;
  //           }
  //         })

  //       }, error => {
  //         alert('No User Found In Database');
  //         return;
  //       }
  //     )
  //   }
  // };


  // saveUsers(newemailaddress, newpassword, userData : any) {
  //   this.myLoginService.CreateNewUser(newemailaddress, newpassword).then(
  //       newUserDetails => {
  //         console.log('newUserDetails', newUserDetails);

  //           if (userData.userType == "Admin User") {
  //             userData.uid = newUserDetails.uid;
  //             this.myUsersList.push(userData);
  //             this.myRoute.navigate([''])
  //           }

  //           else if (userData.userType == "Company User") {
  //             userData.uid = newUserDetails.uid;
  //             this.myUsersList.push(userData);
  //             this.myRoute.navigate([''])
  //           }

  //           else if (userData.userType == "Student") {
  //             userData.uid = newUserDetails.uid;
  //             this.myUsersList.push(userData);
  //             this.myRoute.navigate(['']);
  //           }
  //       },
  //       error => {
  //         console.log('User Saving Error' + error);
  //       }
  //     )
  // };

  // logoutUsers() {
  //   this.isLoggedIn = false;
  //   this.myLoginService.LogoutUser();
  // };

removeData(firebaseKey: any) {
    console.log('firebaseKey', firebaseKey);
    this.BookingLocSpaces.remove(firebaseKey);
  };



}
