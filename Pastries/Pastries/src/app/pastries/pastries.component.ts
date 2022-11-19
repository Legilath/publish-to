import { Component, OnInit, ViewChild } from '@angular/core';
import { PASTRIES } from '../mock-pastries';
import { Pastrie } from '../pastrie';

@Component({
  selector: 'app-pastries',
  templateUrl: './pastries.component.html',
  styleUrls: ['./pastries.component.scss']
})
export class PastriesComponent implements OnInit {
  title:string = "Liste de Patisseries";
  pastries: Array<Pastrie> = PASTRIES;
  selectedPastry: Pastrie;
  ArrFilters: Array<string> = [];
  @ViewChild('name') inputName:any;


  constructor() { }

  ngOnInit(): void {
  }

  selectPastry($pastry: Pastrie){
    this.selectedPastry = $pastry;
  }

  addFilter($e:any){
    this.ArrFilters.push($e.target.value);
    this.inputName.nativeElement.value = "";
    this.afficheSearch();
  }

  deleteFilter($filt:number){
    this.ArrFilters.splice($filt, 1);
    this.afficheSearch();
  }

  afficheSearch(){// RESTE A FAIRE : créer des tags filters à afficher et la methode de supression des-dits tags...

    let Arr: Array<Pastrie> = [];

    for(let pastry of PASTRIES){
      let Ser = true;
      for(let filter of this.ArrFilters){
        if(pastry.name.search(filter) === -1){
          Ser = false;
        }
      }
      if(Ser === true){
        Arr.push(pastry)
      };
    }
    this.pastries = Arr;
  }

}
