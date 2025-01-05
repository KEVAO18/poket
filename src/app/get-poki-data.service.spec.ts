import { TestBed } from '@angular/core/testing';

import { GetPokiDataService } from './get-poki-data.service';

describe('GetPokiDataService', () => {
  let service: GetPokiDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPokiDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
