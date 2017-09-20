import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MarvelService {

  private baseUrl: string = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=a26e8e5e70540926b172d87ddcb9909f&hash=5653d16b9d7c92ed316d96829ca55b81";

  constructor(private http: Http) { }

  getCharacters(searchTerm: string): Observable<any> {

    let url = this.baseUrl + "&limit=50"

    if(searchTerm){
      url = this.baseUrl + "&nameStartsWith=" + searchTerm;
    }

    return this.http.get(url)
      .map(result => {
        return result.json()
      })

  }



}