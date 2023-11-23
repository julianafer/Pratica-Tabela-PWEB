import { TestBed } from '@angular/core/testing';

import { MensagemConsoleService } from './mensagem-console.service';

describe('MensagemConsoleService', () => {
  let service: MensagemConsoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensagemConsoleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
