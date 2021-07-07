import { TestBed } from '@angular/core/testing';

import { CollectionCrudService } from './collection-crud.service';

describe('CollectionCrudService', () => {
  let service: CollectionCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollectionCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
