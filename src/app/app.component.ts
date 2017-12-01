import { Component } from '@angular/core';

class Personne{
	nom : string;
	prenom : string;
	description : string;
	travail : string;

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
  styleUrls: ['./app.component.css'],
  providers:[]
})

export class AppComponent {

  title = 'Liste des "Scientifiques":';

  List =[
    {titre:"LIGTH", message:"Lorem ipsum dolor sit amet, no nec alii falli placerat. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, no nec alii falli placerat. Lorem ipsum dolor sit amet, no nec alii falli placerat. Vix virtute pertinacia te, ei utroque fuisset sed. Qui id sonet scaevola. Quo aperiri fierent adolescens ei, no eos meis nonumy, mel meis dictas et.", 
    type:"INFO"},
    {titre:"MEDIUM", message:"Ius ipsum velit nominavi ex. Ius eu nostro nostrud dissentias. Ne usu enim timeam signiferumque. His ne nominati torquatos, eum putant delenit albucius ei, nostro tincidunt quo ut.", 
    type:"WARNING"},
    {titre:"HIGH", message:"Cu vel tollit torquatos. Te sed facer oblique nonumes, vel velit mandamus quaerendum ne. ", 
    type:"ERROR"}
  ]

  type=this.List[0];

  clickList(b){
  this.type=b; 
  }

   /*personne = new Personne("Rafaralahy",
				"Yves",
				"Cooking things...",
				"'if you don't know, don't ask! Don't hate the player, hate the GAME!'");*/

   liste =[{nom :"Einstein", prenom : "Albert", description :"Il publie sa théorie de la relativité restreinte en 1905 et sa théorie de la gravitation dite relativité générale en 1916. Il contribue largement au développement de la mécanique quantique et de la cosmologie, et reçoit le prix Nobel de physique de 1921 pour son explication de l’effet photoélectrique2. Son travail est notamment connu du grand public pour l’équation E=mc2, qui établit une équivalence entre la matière et l’énergie d’un système.", travail : "Relativité Générale"},
      {nom :"Faraday", prenom : "Michael", description :"Il publie sa théorie de la relativité restreinte en 1905 et sa théorie de la gravitation dite relativité générale en 1916. Il contribue largement au développement de la mécanique quantique et de la cosmologie, et reçoit le prix Nobel de physique de 1921 pour son explication de l’effet photoélectrique2. Son travail est notamment connu du grand public pour l’équation E=mc2, qui établit une équivalence entre la matière et l’énergie d’un système.", travail : "Relativité Générale"},
      {nom :"Curie", prenom : "Marie", description :"Il publie sa théorie de la relativité restreinte en 1905 et sa théorie de la gravitation dite relativité générale en 1916. Il contribue largement au développement de la mécanique quantique et de la cosmologie, et reçoit le prix Nobel de physique de 1921 pour son explication de l’effet photoélectrique2. Son travail est notamment connu du grand public pour l’équation E=mc2, qui établit une équivalence entre la matière et l’énergie d’un système.", travail : "Relativité Générale"},
          {nom :"Curie", prenom : "Pierre", description :"Il publie sa théorie de la relativité restreinte en 1905 et sa théorie de la gravitation dite relativité générale en 1916. Il contribue largement au développement de la mécanique quantique et de la cosmologie, et reçoit le prix Nobel de physique de 1921 pour son explication de l’effet photoélectrique2. Son travail est notamment connu du grand public pour l’équation E=mc2, qui établit une équivalence entre la matière et l’énergie d’un système.", travail : "Relativité Générale"}];


     personne = this.liste[0];  

   clickOn(p){
   	this.personne = p;
   }
}

   /*count = 0;
   output="";

   calcOn(number:String){
   	this.output=this.output+number;
   }*/


 /*
  import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Liste des Scientifiques';
  
  
  
}
  */
