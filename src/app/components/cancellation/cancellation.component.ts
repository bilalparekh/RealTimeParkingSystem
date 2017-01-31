import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable ,FirebaseObjectObservable} from 'angularfire2';
import { ActivatedRoute , Router} from "@angular/router";
import { Observable} from 'rxjs/Observable';
import { DataHandlingService } from '../../myServices/data-handling.service';
import { MyAuthenticationService } from '../../myServices/my-authentication.service';
@Component({
  selector: 'app-cancellation',
  templateUrl: './cancellation.component.html',
  styleUrls: ['./cancellation.component.css']
})
export class CancellationComponent implements OnInit {

  BookingLocSpaces;

  constructor(private parkingLocation : DataHandlingService, private myRouter: Router, public myAuthService : MyAuthenticationService) {
    this.BookingLocSpaces = [];
    this.parkingLocation.getNewLocSubject();

    this.parkingLocation.getNewLocSubject()
      .subscribe(parkingSubject =>{
        this.BookingLocSpaces = parkingSubject;
        console.log("BookingLocSpaces",this.BookingLocSpaces)
      })
      this.parkingLocation.getParkingLocationsDataFromDB();
      
  }
  

  ngOnInit() {
  }
  
deleteSlots(key: any) {
    console.log('key', key);
    this.myAuthService.removeData(key);
  };
}
