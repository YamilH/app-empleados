import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  title = 'Listado de Empleados';

  constructor(private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService){

    // this.empleados=this.empleadosService.empleados;
  }

  ngOnInit(): void {
  this.empleadosService.obtenerEmpleados().subscribe(misEmpleados=>{
    console.log(misEmpleados);

    this.empleados=Object.values(misEmpleados);


  });
  }


  empleados: Empleado[] = [];

  cuadroNombre: string;
  cuadroApellido: string;
  cuadroCargo: string;
  cuadroSalario: number;
  router: any;



  agregarEmpleado(){
    let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario)

    // this.miServicio.muestraMensaje("Nombre del Empleado: "+ miEmpleado.nombre);

    this.empleadosService.agregarEmpleadoServicio(miEmpleado);

    this.empleados.push(miEmpleado);
    this.router.navigate([''])
  }

}
