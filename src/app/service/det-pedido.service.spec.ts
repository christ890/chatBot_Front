import { TestBed } from '@angular/core/testing';

import { DetPedidoService } from './det-pedido.service';

describe('DetPedidoService', () => {
  let service: DetPedidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetPedidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
