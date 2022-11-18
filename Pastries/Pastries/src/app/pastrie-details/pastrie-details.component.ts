import { Component, OnInit, Input, ɵisDefaultChangeDetectionStrategy, ViewChild } from '@angular/core';
import { List, Pastrie } from '../pastrie';

import { INGREDIENTS_LISTS } from '../mock-pastries';
import { identifierName } from '@angular/compiler';
import { Key } from 'readline';

@Component({
  selector: 'app-pastrie-details',
  templateUrl: './pastrie-details.component.html',
  styleUrls: ['./pastrie-details.component.scss']
})

export class PastrieDetailsComponent implements OnInit {

  ingredientsLists: List[] = INGREDIENTS_LISTS;
  ingredients: Array<string> = [];
  @Input() pastrie:Pastrie;
  @ViewChild('champ') champ:any;
  
  constructor() { }
  
  addIng($e:any){
    this.ingredients.push($e.target.value);
    this.champ.nativeElement.value = "";
  }

  deleteIng($ind:number, $id:string){
    this.ingredients.splice($ind, 1);
  }

  ngOnInit(): void {
    
  }

  ngOnChanges() :void{
    if(this.pastrie){
      this.ingredients = this.ingredientsLists.find(elem => elem.id === this.pastrie?.id)?.list || [];  
    }
  }

}
