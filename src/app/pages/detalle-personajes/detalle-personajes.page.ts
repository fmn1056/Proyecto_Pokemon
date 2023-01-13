import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SouthparkService } from 'src/app/services/southpark.service';

@Component({
  selector: 'app-detalle-personajes',
  templateUrl: './detalle-personajes.page.html',
  styleUrls: ['./detalle-personajes.page.scss'],
})
export class DetallePersonajesPage implements OnInit {

  personaje:any = null;
  listadoEpisodes: any = [];
  listadoEpisodesPersonaje: any = [];
  page: number = 1;

  pageTitle:string = '';


  constructor(private activatedRoute: ActivatedRoute, private SouthparkService: SouthparkService) { 
    this.getPersonaje();
    this.getAllListadoEpisodes();
  }

  ngOnInit() {
    console.log(this.personaje);
    console.log(this.listadoEpisodes);
    console.log(this.listadoEpisodesPersonaje);
    this.pageTitle = this.personaje.name;
  }

  getPersonaje(): void{
    this.activatedRoute.queryParams.subscribe(params => {
      this.personaje = JSON.parse(params['personaje']);
    });
  }

  getAllListadoEpisodes(): void{
    this.SouthparkService.getListadoEpisodes()
      .then(data => {
        this.listadoEpisodes = [...this.listadoEpisodes,...data]; 
        for(let episode of this.listadoEpisodes){
          for(let e of this.personaje.episode){
            if(e === episode.url){
              this.listadoEpisodesPersonaje.push(episode)
            }
          }
        }       
      },
      (error) => {
        console.log(error);
      });  
  }

  



}
