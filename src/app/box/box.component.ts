import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {

	  ngOnInit() {}
	  constructor() {}


	@Input() boxMsg;

	List =[
		{titre:"Light", message:"Lorem ipsum dolor sit amet, no nec alii falli placerat. Eu semper maiorum perfecto sea, albucius democritum conclusionemque ei mel. Vix virtute pertinacia te, ei utroque fuisset sed. Qui id sonet scaevola. Quo aperiri fierent adolescens ei, no eos meis nonumy, mel meis dictas et.", 
		type:"INFO"},
		{titre:"Medium", message:"Ius ipsum velit nominavi ex. An eam adhuc aeterno, porro gloriatur intellegebat sit an. Ius eu nostro nostrud dissentias. Ne usu enim timeam signiferumque. His ne nominati torquatos, eum putant delenit albucius ei, nostro tincidunt quo ut. Esse prima erant eu usu, ei tractatos scriptorem mediocritatem quo.", 
		type:"WARNING"},
		{titre:"High", message:"Cu vel tollit torquatos. Te sed facer oblique nonumes, vel velit mandamus quaerendum ne. Fierent ocurreret cu vim. Eu semper fierent est. Id per mazim nostro splendide, unum albucius eu his.", 
		type:"ERROR"}
	]

	type=this.List[0];

	clickList(b){
	this.type=b; 
	}
}
