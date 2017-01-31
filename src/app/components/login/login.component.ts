import { Component, OnInit } from '@angular/core';
import { AngularFire , FirebaseListObservable, AuthProviders, AuthMethods} from 'angularfire2';
import { ActivatedRoute , Router} from "@angular/router";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user : any;

  constructor(private af:AngularFire, private myRoute:Router) { 
    this.af.auth.subscribe(user => {
      if(user) {
        this.user = user;
        this.myRoute.navigate(["MainPage"])
      }
      else {
        this.user = {};
      }
    })
  }

  ngOnInit() {
  }
login(form): boolean {
    console.log(form);
    

    this.af.auth.login(form,{
    provider: AuthProviders.Password,
    method: AuthMethods.Password
}).then(
    result => {
        if (result) {
              this.myRoute.navigate(["MainPage"])
        }
  }
)


    
    return false;
  }
}
