import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../service/pokemon.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  pokemonsError: boolean = false;
  pokemons;

  constructor(public pokemonservice: PokemonService) {}

  ngOnInit() {
  }

  checkPokemon(pokemon) {
    this.pokemonservice.checkPokemon(pokemon.value).subscribe(
      (res)=>{
        this.pokemons = res;
        console.log(res);
        console.log(this.pokemons);
        this.pokemonsError = false;
      },
      (error)=> {
        this.pokemonsError = true;
      });
        
  }

}
