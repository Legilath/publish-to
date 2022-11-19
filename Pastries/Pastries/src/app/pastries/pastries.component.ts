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
  ArrTagFilters: Array<string> = [];
  @ViewChild('name') inputName:any;


  constructor() { }

  ngOnInit(): void {
  }

  selectPastry($pastry: Pastrie){
    this.selectedPastry = $pastry;
  }

  addtagFilter($tag:string){
    this.ArrTagFilters.push($tag.toLowerCase());
    this.afficheSearch();
  }

  deleteTagFilter($t:number){
    this.ArrTagFilters.splice($t, 1);
    this.afficheSearch();
  }

  addFilter($e:any){
    this.ArrFilters.push($e.target.value.toLowerCase());
    this.inputName.nativeElement.value = "";
    this.afficheSearch();
  }

  deleteFilter($filt:number){
    this.ArrFilters.splice($filt, 1);
    this.afficheSearch();
  }

  afficheSearch(){

    let Arr: Array<Pastrie> = [];

    for(let pastry of PASTRIES){
      let Ser = true;
      for(let filter of this.ArrFilters){
        if(pastry.name.toLowerCase().search(filter) === -1){
          Ser = false;
        }
      }
      for(let tag of this.ArrTagFilters){
        let tagIs = false;
        if(pastry.tags){
          for(let pastryTag of pastry.tags){
            if(pastryTag.toLowerCase().search(tag) !== -1){tagIs = true;}
          }
        }
        if(tagIs === false){Ser = false;}
      }
      if(Ser === true){
        Arr.push(pastry);
      };
    }
    this.pastries = Arr;
  }

}
