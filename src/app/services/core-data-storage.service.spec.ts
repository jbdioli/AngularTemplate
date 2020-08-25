import { TestBed } from '@angular/core/testing';

import { CoreDataStorageService } from './core-data-storage.service';

describe('CoreDataStorageService', () => {
  let service: CoreDataStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreDataStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
