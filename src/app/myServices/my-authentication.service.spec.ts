/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyAuthenticationService } from './my-authentication.service';

describe('MyAuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyAuthenticationService]
    });
  });

  it('should ...', inject([MyAuthenticationService], (service: MyAuthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
