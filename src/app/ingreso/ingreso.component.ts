import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { clienteDto } from '../model/clienteDto';
import { ServiceService } from '../service/service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';



@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {
  cliente: FormGroup ;
  tipoDoc:string="";
  numDoc:number=0;
  localCliente!: clienteDto;
  constructor(
    private serviceCliente:ServiceService,
    private fb:FormBuilder,
    public router: Router
    ) {
    this.cliente= new FormGroup({});
    
  }

  ngOnInit(): void {
    this.cliente = new FormGroup({
      numDocumento: new FormControl(),
      tipoDoc: new FormControl(), 
      primerNombre: new FormControl(''),
      segundoNombre: new FormControl(''),
      primerApellido: new FormControl(''),
      segundoApellido: new FormControl(''),
      telefono: new FormControl(''),
      direccion: new FormControl(''),
      ciudadResidencia:new FormControl(''),
    });

    this.cliente=this.fb.group({
      tipoDoc :['',Validators.required],
      numDocumento :['',Validators.required]

    })
  }
  public consultarCliente(){
    console.log(this.cliente);
    this.tipoDoc=this.cliente.controls['tipoDoc'].value;
    this.numDoc=this.cliente.controls['numDocumento'].value;
    this.serviceCliente.getCliente(this.tipoDoc,this.numDoc).subscribe({next:bcliente => {
      //console.log(bcliente);
      this.localCliente=bcliente;
      this.router.navigate(['/informacion',JSON.stringify(this.localCliente)]);
      Swal.fire({
        icon: 'success',
        title: 'Cliente encontrado',
      });
    }, error: () => {
      Swal.fire({
        icon: 'error',
        title: 'No se encontro cliente',
      });
      this.limpiar();
    }
  });
  
  }

 limpiar() {
    this.cliente.reset();
}

}
