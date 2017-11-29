import { Component } from '@angular/core';

class Personne{
	nom : string;
	prenom : string;
	description : string;
	description : string;

	constructor (nom : string, prenom : string, description : string, travail : string){
		this.nom = nom;
		this.prenom = prenom;
		this.description = description;
		this.travail = travail;
	}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 

  title = 'My project:';
   personne = new Personne("Rafaralahy",
				"Yves",
				"Cooking things...",
				"'if you don't know, don't ask! Don't hate the player, hate the GAME!'");


   clickOn(){
   	this.count++:
   	this.personne.prenom=this.personne.prenom +" "+this.count;
   }

   count = 0;
   output="";
   calcOn(number){
   	this.output=this.output+number;
   }

  
 /*
  import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Liste des Scientifiques';
  
  
  personne = {
				nom :"Einstein",
				prenom : "Albert",
				description :"Il publie sa théorie de la relativité restreinte en 1905 et sa théorie de la gravitation dite relativité générale en 1916. Il contribue largement au développement de la mécanique quantique et de la cosmologie, et reçoit le prix Nobel de physique de 1921 pour son explication de l’effet photoélectrique2. Son travail est notamment connu du grand public pour l’équation E=mc2, qui établit une équivalence entre la matière et l’énergie d’un système.",
				travail : "Relativité Générale"
			};	
}
  */
}
