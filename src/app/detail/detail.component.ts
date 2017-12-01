import { Component, OnInit, Input } from '@angular/core';
import {ListPersonneService} from '../list-personne.service';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers:[ListPersonneService]
})

export class DetailComponent implements OnInit {

	alea=Math.random();
	
@Input() nomPersonne;


  constructor(private listPersonne:ListPersonneService) {

   }

  ngOnInit() { }

  clickTitre=function(){
  this.listPersonne.ajoute();
  var v=this.listPersonne.donm
  console.log(v);
  }

  modifieNom = function(){
  	this.maPersonne.nom+="TOTO";
  }
}
