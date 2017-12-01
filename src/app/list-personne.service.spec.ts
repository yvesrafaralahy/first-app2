import { TestBed, inject } from '@angular/core/testing';

import { ListPersonneService } from './list-personne.service';

describe('ListPersonneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListPersonneService]
    });
  });

  it('should be created', inject([ListPersonneService], (service: ListPersonneService) => {
    expect(service).toBeTruthy();
  }));
});
