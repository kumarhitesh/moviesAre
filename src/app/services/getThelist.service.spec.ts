/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetThelistService } from './getThelist.service';

describe('Service: GetThelist', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetThelistService]
    });
  });

  it('should ...', inject([GetThelistService], (service: GetThelistService) => {
    expect(service).toBeTruthy();
  }));
});
