/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PocService } from './poc.service';

describe('PocService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PocService]
    });
  });

  it('should ...', inject([PocService], (service: PocService) => {
    expect(service).toBeTruthy();
  }));
});
