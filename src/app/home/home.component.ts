import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cervejas = new Array;

  constructor(private serv: AppService) {}

  ngOnInit() {
    this.listarTodasCervejas();     
  }

  listarTodasCervejas(){
    this.serv.listar().subscribe( data => this.cervejas = data);    
  }

  
}
