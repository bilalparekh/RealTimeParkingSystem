import { Injectable } from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2';

@Injectable()
export class LoginService {

  constructor(public af: AngularFire) {

  }

  CreateNewUser(email:string, password:string) {
    return this.af.auth.createUser({email: email, password: password});
  };


  LoginUser(email:string, password:string) {
    var loginCred = {email: email, password: password};
    const AuthObj = {
      provider: AuthProviders.Password,
      method: AuthMethods.Password
    };

    return this.af.auth.login(loginCred,AuthObj)
  };

  LogoutUser () {
    return this.af.auth.logout();
  };

}

