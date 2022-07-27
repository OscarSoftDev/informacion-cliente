import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { clienteDto } from '../model/clienteDto';

@Component({
  selector: 'app-informacion-basica',
  templateUrl: './informacion-basica.component.html',
  styleUrls: ['./informacion-basica.component.css']
})
export class InformacionBasicaComponent implements OnInit {

  cliente!: clienteDto;
  constructor(private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      });
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.cliente=JSON.parse(params['cliente']);
      });


  }

  

}
