import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Address {
  cep?: string;
  logradouro?: string;
  complemento?: string;
  bairro?: string;
  localidade?: string;
  uf?: string;
  unidade?: string;
  ibge?: string;
  gia?: string;

  erro?: boolean;
}



@Injectable()
export class AppService {

  cervejasUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(`${this.cervejasUrl + 'getallceva'}`);   
  }

  getCerveja(id:number){    
    return this.http.get<any[]>(`${this.cervejasUrl + 'get/' + id}`);
  }

  getCep(cep: number){    
    return this.http.get<Address>(`${'https://viacep.com.br/ws/' + cep + '/json'}`);   
  }

  getUsuario(email: string){    
    return this.http.get<any[]>(`${'http://localhost:3000/getusuario/' + email}`);   
  }

  postNovoUsuario(usuario:any){
   return this.http.post('http://localhost:3000/novousuario', usuario).subscribe( res => {
          console.log("Cadastrado com sucesso",res);
        },
        err => {
          console.log("Error!!!");
        }
      ); 
  }

  validarUsuario(){
    //converte json do local storage para objeto
    let usuario = JSON.parse(localStorage.getItem('usuario'));
    //location.reload();
    return usuario;
  }

  postPedido(pedido:any){
    return this.http.post('http://localhost:3000/novopedido', pedido).subscribe( res => {
           console.log("Pedido Salvo com sucesso",res);
         },
         err => {
           console.log("Error!!!");
         }
       ); 
   }


}
