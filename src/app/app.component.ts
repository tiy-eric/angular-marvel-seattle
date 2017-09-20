import { Component, OnInit } from '@angular/core';
import {MarvelService } from './marvel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  characters;

  constructor(private marvelService: MarvelService){}

  getDataFromService(searchTerm: string = ''){
    this.marvelService.getCharacters(searchTerm)
      .subscribe(
        potato => {
          this.characters = potato.data.results;
        }
      )
  }

  ngOnInit(){
    this.getDataFromService()
  }

}
