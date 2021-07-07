import { TestBed } from '@angular/core/testing';

import { CategoryCrudService } from './category-crud.service';

describe('CategoryCrudService', () => {
  let service: CategoryCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
