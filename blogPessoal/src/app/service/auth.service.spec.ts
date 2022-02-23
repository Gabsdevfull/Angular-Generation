import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { CadastrarComponent } from '../cadastrar/cadastrar.component';
import { Usuario } from '../model/Usuario';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});




