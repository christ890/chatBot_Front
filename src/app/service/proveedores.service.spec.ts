import { TestBed } from '@angular/core/testing';


const baseUrl = 'http://localhost:8080/api/proveedores';

import { ProveedoresService } from './proveedores.service';

describe('ProveedoresService', () => {
  let service: ProveedoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProveedoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
