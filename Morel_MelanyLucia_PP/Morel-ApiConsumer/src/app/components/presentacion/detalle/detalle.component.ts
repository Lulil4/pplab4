import { Component, OnInit} from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Pokemon } from 'src/app/classes/pokemon';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  pokemon:Pokemon;
  nombrePoke;
  habilidades;
  efectos : Array<string>;
  fotos: Array<string>;
  esperar : boolean = false;
  constructor(private router: ActivatedRoute, private data : DataService ) { }

  ngOnInit(): void {
    this.esperar = true;
    setTimeout(() => {
    this.esperar=false;
    }, 1000);
    this.fotos = new Array();
    this.habilidades = new Array();

    this.pokemon = new Pokemon();
    this.nombrePoke = this.router.snapshot.paramMap.get("pokemon");
    this.data.getPokemonByName(this.nombrePoke)
    .subscribe(poke => {
      this.pokemon = poke;
      this.fotos.push(poke.sprites.back_default);
      this.fotos.push(poke.sprites.shiny);
      this.fotos.push(poke.sprites.front_default);
      this.fotos.push(poke.sprites.front_shiny);

    });



    this.data.getPokemonByName(this.nombrePoke).subscribe(pokemon=>{
      pokemon.abilities.forEach(hab => {
        this.data.getHabilidad(hab.ability.url).subscribe(habLink =>{
          this.habilidades.push(habLink);
        });
      });
    });

    
  }
  
}
