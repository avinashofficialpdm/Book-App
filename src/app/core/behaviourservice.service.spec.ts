/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BehaviourserviceService } from './behaviourservice.service';

describe('Service: Behaviourservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BehaviourserviceService]
    });
  });

  it('should ...', inject([BehaviourserviceService], (service: BehaviourserviceService) => {
    expect(service).toBeTruthy();
  }));
});
