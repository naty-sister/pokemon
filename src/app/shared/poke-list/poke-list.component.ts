import { PokeApiService } from 'src/app/service/poke-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  constructor(
    private PokeApiService: PokeApiService
  ) { }
  

  ngOnInit(): void {
    this.PokeApiService.apiListAllPokemons.subscribe(
      res => console.log()

    );
  }

}
