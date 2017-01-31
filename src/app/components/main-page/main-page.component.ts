import { Component, OnInit } from '@angular/core';
import { AngularFire , FirebaseListObservable,AuthProviders, AuthMethods} from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute , Router} from "@angular/router";
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

 BookingLocSpaces: FirebaseListObservable<any[]>;
 constructor(private af: AngularFire , private myRoute:Router) {
  this.BookingLocSpaces = af.database.list('/BookingLocSpaces');
  }

  save(form): boolean {
    console.log(form);
    console.log(this.BookingLocSpaces);
    this.BookingLocSpaces.push(form);
    return false;
  }

  ngOnInit() {
  }
logout(){
  this.af.auth.logout();
  this.myRoute.navigate(['']);
}
}
