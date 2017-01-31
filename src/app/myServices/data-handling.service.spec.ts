/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataHandlingService } from './data-handling.service';

describe('DataHandlingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataHandlingService]
    });
  });

  it('should ...', inject([DataHandlingService], (service: DataHandlingService) => {
    expect(service).toBeTruthy();
  }));
});
