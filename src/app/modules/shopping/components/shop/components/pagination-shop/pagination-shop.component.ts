import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination-shop',
  templateUrl: './pagination-shop.component.html',
  styleUrls: ['./pagination-shop.component.css']
})
export class PaginationShopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  p:number = 1;
  itemsPerPage:number = 4;
  totalProduct:any;
}
