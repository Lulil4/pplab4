import { Component, OnInit} from '@angular/core';

import { DataService } from '../../../services/data.service';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/classes/pokemon';

interface Data{
  count: number;
  results: Array<any>;
  next: string;
  previous: string;
}

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  results = [];
  count: number;
  next: string;
  previous: string;
  esperar : boolean = false;
  pages =[
  ]
  constructor(private router : Router, private data : DataService) { }

  ngOnInit(): void {
     this.esperar = true;
     setTimeout(() => {
       this.data.getPages()
       .subscribe((data: Data) => {
         this.results = data.results;
         this.count = data.count;
         this.next = data.next;
         this.previous = data.previous;
         this.esperar = false;
       });  
     }, 2000);

  }

  onPageChange(event){
    this.esperar = true;
    setTimeout(() => {
      if(event.previousPageIndex < event.pageIndex){
        this.data.getPages(this.next)
        .subscribe((data: Data) => {
          this.results = data.results;
          this.count = data.count;
          this.next = data.next;
          this.previous = data.previous;
          this.esperar = false;
        });
      }
      else{
        this.data.getPages(this.previous)
        .subscribe((data: Data) => {
          this.results = data.results;
          this.count = data.count;
          this.next = data.next;
          this.previous = data.previous;
          this.esperar = false;
        });
      }
    }, 2000);
  }

  verDetalle(poke){
    
    let unPoke : Pokemon = new Pokemon();
    unPoke.name = poke.name;
    this.data.setDatos(unPoke); 
    this.router.navigate(["/detalle/" + poke.name])
    .catch(e => console.log(e));
  }
}