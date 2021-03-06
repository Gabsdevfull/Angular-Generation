import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario
  confirmarSenha: string
  tipoUsuarios: string

  constructor(
    private router: Router,
    private authService: AuthService

  ) { }

  ngOnInit() {

    window.scroll(0, 0)

  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value

  }

  tipoUsuario(event: any) {

    this.tipoUsuarios = event.target.value



  }

  CadastrarComponent() {
    this.usuario.tipo = this.tipoUsuarios

    if (this.usuario.senha != this.confirmarSenha) {
      alert('As senhas estão incorretas.')
    } else {
      this.authService.Cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        this.router.navigate(['/entrar'])
        alert('Usuário cadastrado com sucesso! ')
      })
    }
  }
}

  







