import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable, Subject } from "rxjs";
import {  Router } from "@angular/router";

@Injectable()
export class DataHandlingService {

  BookingLocSpaces : FirebaseListObservable<any[]>;
  reserveSlotParking : FirebaseListObservable<any[]>;
  viewAllUserData : FirebaseListObservable<any[]>;

  NewReserveSlotParkingSubject : Subject<any>;
  NewLocSubject: Subject<any>;

  NewViewAllUsersSubject : Subject<any>;

  constructor(public af: AngularFire, private myRouter: Router) {
    this.BookingLocSpaces = this.af.database.list('/BookingLocSpaces');
    this.reserveSlotParking = this.af.database.list('/ReserveSlotParking');
    this.viewAllUserData = this.af.database.list('/userProfile');
    this.NewLocSubject = new Subject();
    this.NewReserveSlotParkingSubject = new Subject();

    this.NewViewAllUsersSubject = new Subject();
  }

 getAllUsersData(){
   return this.NewViewAllUsersSubject;
 }
 getAllUsersDataFromDB() {
    this.viewAllUserData
        .subscribe(UserData => {
          this.NewViewAllUsersSubject.next(UserData);
        });
  }
  
  getNewLocSubject(){
    return this.NewLocSubject;
  }
  getParkingLocationsDataFromDB() {
    this.BookingLocSpaces
        .subscribe(parkingLocationsData => {
          this.NewLocSubject.next(parkingLocationsData);
        });
  }


  getNewReserveSlotParkingSubject(){
    return this.NewReserveSlotParkingSubject;
  }
  getreserveSlotParkingDataFromDB() {
    this.reserveSlotParking
        .subscribe(reserveLocationsData => {
          this.NewReserveSlotParkingSubject.next(reserveLocationsData);
        });
  }

  addReserveSlot(reserveFormData){
    this.reserveSlotParking.push(reserveFormData)
  }
  

  

}
