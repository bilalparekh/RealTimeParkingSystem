import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable ,FirebaseObjectObservable} from 'angularfire2';
import { ActivatedRoute , Router} from "@angular/router";
import { Observable} from 'rxjs/Observable';
import { DataHandlingService } from '../../myServices/data-handling.service';
import { MyAuthenticationService } from '../../myServices/my-authentication.service';

@Component({
  selector: 'app-view-all-users',
  templateUrl: './view-all-users.component.html',
  styleUrls: ['./view-all-users.component.css']
})
export class ViewAllUsersComponent implements OnInit {

  Users;

  constructor(private viewAllUsers : DataHandlingService, private myRouter: Router, public myAuthService : MyAuthenticationService) {
    this.Users = [];
    this.viewAllUsers.getAllUsersData();

    this.viewAllUsers.getAllUsersData()
      .subscribe(UserSubject =>{
        this.Users = UserSubject;
        console.log("Users",this.Users)
      })
      this.viewAllUsers.getAllUsersDataFromDB();
      
  }
  

  ngOnInit() {
  }
  

}
