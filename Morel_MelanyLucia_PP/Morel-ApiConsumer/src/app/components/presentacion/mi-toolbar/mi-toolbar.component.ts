import { Component, OnInit } from '@angular/core';

export interface MenuItem{
  texto:string;
  ruta:string;
  icono:string;
}

@Component({
  selector: 'app-mi-toolbar',
  templateUrl: './mi-toolbar.component.html',
  styleUrls: ['./mi-toolbar.component.css']
})
export class MiToolbarComponent implements OnInit {
  menuItems: MenuItem[] = [
    {
      texto: 'Pokemon!',
      icono: "home",
      ruta: ""
    },
    {
      texto: "Listado",
      icono: "pets",
      ruta: "listado"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
