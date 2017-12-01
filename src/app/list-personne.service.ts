import { Injectable } from '@angular/core';

@Injectable()
export class ListPersonneService {

		compteur=0;

  ajoute(){
  		this.compteur++;
   }
   donne(){
   		return this.compteur;
   }

}
