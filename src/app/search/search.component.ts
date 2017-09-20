import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  userSearch: string;

  @Output() userSearched = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  
  }

  performSearch(){
    this.userSearched.emit(this.userSearch)
  }

}
