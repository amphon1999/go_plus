import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopTableApiComponent } from './shop-table-api.component';

describe('ProductsComponent', () => {
  let component: ShopTableApiComponent;
  let fixture: ComponentFixture<ShopTableApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopTableApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopTableApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});