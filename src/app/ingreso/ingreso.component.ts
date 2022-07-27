import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { clienteDto } from '../model/clienteDto';
import { ServiceService } from '../service/service.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {
  cliente: FormGroup ;
  tipoDoc:string="";
  numDoc:number=0;
  constructor(
    private serviceCliente:ServiceService,
    private fb:FormBuilder
    ) {
    this.cliente= new FormGroup({});
  }

  ngOnInit(): void {
    this.cliente = new FormGroup({
      numDocumento: new FormControl("0"),
      tipoDoc: new FormControl('NA'), 
      primerNombre: new FormControl(''),
      segundoNombre: new FormControl(''),
      primerApellido: new FormControl(''),
      segundoApellido: new FormControl(''),
      telefono: new FormControl(''),
      direccion: new FormControl(''),
      ciudadResidencia:new FormControl(''),
    });

  
  }
  public consultarCliente(){
    this.tipoDoc=this.cliente.controls['tipoDoc'].value;
    this.numDoc=this.cliente.controls['numDocumento'].value;
    this.serviceCliente.getCliente(this.tipoDoc,this.numDoc).subscribe({next:bcliente => {
      console.log(bcliente);
      Swal.fire({
        icon: 'success',
        title: 'Cliente encontrado',
      });
    }, error: () => {
      Swal.fire({
        icon: 'error',
        title: 'No se encontro cliente',
      });
    }
  });

  }

 

}
