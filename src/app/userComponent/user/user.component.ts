import { User } from 'src/app/models/Usert';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ServicioNetService } from 'src/app/core/service/servicio-net.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  listaUser: User[] = [];
  isTableEmpty: boolean = true; // Variable para controlar la visualización de la tabla

  constructor( private _User : ServicioNetService){}


  ngOnInit(): void {

  }
  getVehiculo(){
    this._User.get().subscribe(
      data=>{
        this.listaUser = data;
        console.log(this.listaUser);
      }
    )
  }

  buscar() {
    this.getVehiculo();
    this.isTableEmpty = false; // Mostramos la tabla después de obtener los datos
  }


}
