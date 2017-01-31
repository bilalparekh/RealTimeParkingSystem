import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute ,Router} from "@angular/router";
import { AngularFire , FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

 userProfile: FirebaseListObservable<any[]>;
 constructor(private af: AngularFire, private myRoute: Router) {
  this.userProfile = af.database.list('/userProfile');
  }

  registerNewUser(eve, form): boolean {
    console.log("bbb",form);
    eve.preventDefault();
    var userObj : any = {
      email :     form.email,
      password :  form.Password,
      uid      :  ""
    }
    var profObjWidUid = form;
    profObjWidUid.uid = "";
    
    
    this.af.auth.createUser(userObj).then(
        (success) => {
            console.log("success",success)
            if(success.uid){
              
              profObjWidUid.uid = success.uid
              this.userProfile.push(profObjWidUid)
              this.myRoute.navigate(['/Register'])
            }
      
      }).catch(

        (err) => {
        console.log(err);
  
      });;
      console.log(userObj)
      return false;
  }
  

LoginPage(){
  this.myRoute.navigate(['/login']);
}
  ngOnInit() {
  }

}
