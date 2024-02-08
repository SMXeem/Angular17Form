import { TestBed } from '@angular/core/testing';

import { AngularFormService } from './angular-form.service';

describe('AngularFormService', () => {
  let service: AngularFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
