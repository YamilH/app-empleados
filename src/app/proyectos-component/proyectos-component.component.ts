import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent implements OnInit {

  empleados: Empleado[]=[];
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  constructor(private router:Router, private miServicio:ServicioEmpleadosService, private empleadosService: EmpleadosService) { }

  ngOnInit(): void {
    this.empleados=this.empleadosService.empleados;
  }

  volverHome() {
    this.router.navigate(['']);
  }

  agregarEmpleado(){
    let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    //this.miServicio.muestraMensaje("Nombre del empleado: "+ miEmpleado.nombre);
    //push miEmpleado
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
    this.router.navigate(['']);
  }

}