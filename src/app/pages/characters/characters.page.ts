import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

  characters: any;

  constructor(
    private charactersService: CharactersService,
    private router: Router) { }

  ngOnInit() {
    this.charactersService.getCharacters().subscribe(characters => {
      this.characters = characters;
    });
  }

  goToDetails(id: number){
    this.router.navigate(['/character-details/' + id]);
 }
  
}
