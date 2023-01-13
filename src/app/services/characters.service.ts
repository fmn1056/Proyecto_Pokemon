import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

interface CharacterResponse {
  data: Character;
}

interface Character {
  name: string;
  img: string;
  relatives: Relative[];
  episodes: Episode[];
}

interface Relative {
  url: string;
  relation: string;
}

interface Episode {
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private apiUrl = 'https://spapi.dev/api/characters';

  constructor(private http: HttpClient) { }

  getCharacters() {
    return this.http.get<CharacterResponse>(this.apiUrl).pipe(
      map(data => {
        return data.data;
      })
    );
  }

  getCharacter(id: number) {
    return this.http.get<Character>(`${this.apiUrl}/${id}`);
  }
}
