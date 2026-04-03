import { TestBed } from '@angular/core/testing';

import { CategoriesServ } from './categories-serv';

describe('CategoriesServ', () => {
  let service: CategoriesServ;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesServ);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
