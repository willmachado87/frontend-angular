import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-descricao',
  templateUrl: './descricao.component.html',
  styleUrls: ['./descricao.component.css']
})
export class DescricaoComponent implements OnInit {

  id: number;
  cerveja: any;


  constructor(private serv: AppService, private route: ActivatedRoute ) {}

  ngOnInit() {
    this.route.params.subscribe( data => this.id = data['id']);     
    this.getCeva();          
  }

  getCeva(){
    console.log("ID GET: ", this.id);
    this.serv.getCerveja(this.id).subscribe( data => this.cerveja = data);
    console.log(this.cerveja);
    //this.serv.listar().subscribe( data => this.cervejas = data);             
  }

}
