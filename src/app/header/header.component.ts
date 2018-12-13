import { Component, OnInit } from '@angular/core';
import { AuthService, FacebookLoginProvider } from 'angular-6-social-login';
import { AppService } from '../app.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logado = false;
  

  constructor( private socialAuthService: AuthService, private serv: AppService, private router: Router ) { }

  ngOnInit() {
  }

  public login() {    
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
      userDataFacebook => {

        this.serv.getUsuario(userDataFacebook.email).subscribe( data => {                 
          // converter objeto para JSON
          localStorage.setItem('usuario', JSON.stringify(data) );

          // Converte este json para objeto
          let usuario = JSON.parse(localStorage.getItem('usuario'));
          console.log("JSON",usuario);
          alert(usuario.nome + " Logado com sucesso")
          this.logado = true;
                   
        }, err => {            
            if(err.status == 400){             
              alert("Usuario cadastrado com facebook");              
              let novoUsuario = {
                nome:userDataFacebook.name,
                email : userDataFacebook.email,
                senha: userDataFacebook.id,
                admin: 0
              }             
              this.serv.postNovoUsuario(novoUsuario);
                            
              setTimeout(() =>{
                this.serv.getUsuario(novoUsuario.email).subscribe( data => {
                  localStorage.setItem('usuario', JSON.stringify(data) );
                  this.logado = true;   
                });
              },1000);              
            }
          })              
      }
    );    
    this.router.navigate(['cerveja']);
  }


  sair(){
    localStorage.clear();
  }

  

}
