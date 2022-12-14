import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-search-shop',
  templateUrl: './search-shop.component.html',
  styleUrls: ['./search-shop.component.css']
})
export class SearchShopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  enteredSerchValue: string = '';

@Output()
searchBrandChanged: EventEmitter <string> = new EventEmitter<string>();


onSearchBrandChanged(){
    this.searchBrandChanged.emit(this.enteredSerchValue);
}


}
