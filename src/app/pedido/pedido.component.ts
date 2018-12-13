import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  cep: any = {};
  cep2:any;
  numero: number;
  usuario = null;
  cerveja_id: number;
  

  constructor(private serv: AppService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.usuario = this.serv.validarUsuario();
    console.log("USUARIO!!!!:",this.usuario);

    this.route.params.subscribe( data => this.cerveja_id = data['id']);
    console.log("ID da cerveja: ",this.cerveja_id);
    
  }  

  getCep(){
    console.log("RECEBIDO",this.cep);
    
    this.serv.getCep(this.cep.cep).subscribe( data => {
      if(data.erro == true){ 
        alert("Cep invalido")
      }
      console.log(data);
      this.cep = data;        
    })
  }

  postPedido(){
    let pedido = {
      id_usuario: this.usuario.id,
      id_cerveja: this.cerveja_id,
      cep: this.cep.cep,
      endereco: this.cep.logradouro,
      numero: this.numero,
      cidade: this.cep.localidade,
      uf: this.cep.uf,
      bairro: this.cep.bairro,
      status_pedido: 'processando pedido'
    }
    console.log("PEDIDO = ",pedido);
    this.serv.postPedido(pedido);
    alert("Pedido enviado agora é so esperar :)");
  }

  

}
