import { TestBed } from '@angular/core/testing';

import { InfoSnackabrService } from './info-snackabr.service';

describe('InfoSnackabrService', () => {
  let service: InfoSnackabrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoSnackabrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
