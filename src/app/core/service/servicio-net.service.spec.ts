import { TestBed } from '@angular/core/testing';

import { ServicioNetService } from './servicio-net.service';

describe('ServicioNetService', () => {
  let service: ServicioNetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioNetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
