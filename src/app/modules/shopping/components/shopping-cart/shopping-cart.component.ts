import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { Cart } from '../../../../interfaces/cart';
import { HttpClient } from '@angular/common/http';
import { ShareService } from 'src/app/services/share.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  total: number = 0;
  totalPrice:number=0;
  cartList: Product[] = [];
  cart: Cart[] = []   // ยิงแบบตัวเดียว กับยิงขอเป็นชุด datatype ไม่เหมือนกัน
  tcart: any
  arr: string[] = [];
  // myCart_dummy:number[] =[12,4,5,7,14];
  public products : any = [];
  public grandTotal !: number;



  myCart_Product: number[] = [12,4,5,7,14];

  editDelivery:Boolean = false;
  editInvoice:Boolean = false;
  editAddress:Boolean = false;
  addAddress:Boolean = false;
  paymentMethod:Boolean = false;
  formEditInvoice:boolean=false;
  gfg:string = "";
  pay:string = "";

  DeliveryCompany:string = 'ไปรษณีย์ไทย แบบธรรมดา';

  constructor(private http: HttpClient, public share:ShareService,private cartService:CartService ) { }

  ngOnInit() {
    console.log("Hello")
    this.share.count = this.myCart_Product.length;
    console.log("Qty in Cart:" + this.myCart_Product.length);this.myCart_Product.forEach(id => {
      let url = "https://fakestoreapi.com/products/" + id;
      console.log("url: " + url)

      this.http.get<Cart[]>(url).subscribe(res => {
        console.log(res);
        this.tcart = res;
        this.cart.push(this.tcart);
        this.total = this.cart.reduce((accumulator, obj) => {
          return accumulator + obj.price
        }, 0)
      });
      console.log(this.cart);

    })



  }

// for test share data Qty in Cart  btw header cart and shopping shopping cart
onClickQty(){
  //this.share.count = this.myCart_Product.length;
  this.share.count ++;
  console.log("share count:" +this.share.count)
}


onEnableDelete(){
  

}

onAddAddress(){
  // toggle show
  this.addAddress = !this.addAddress
}

onEditAddress(){
  // toggle show
  this.editAddress =!this.editAddress
}
onEditInvoice(){
  // toggle show
  this.editInvoice = !this.editInvoice

}
showFormEditInvoice(){
  // toggle show
  this.formEditInvoice = !this.formEditInvoice

}
onSelectDelivery(){
  // toggle show
  this.editDelivery = !this.editDelivery
}
onSelectPayment(){
  // toggle show
  this.paymentMethod = !this.paymentMethod;
}

setValue(value:string){
  this.gfg = value;
}

setPaymentMethod(value:string){
  this.pay = value;
}
removeItem(item: any){
  this.cartService.removeCartItem(item);
}
emptycart(){
  this.cartService.removeAllCart();
}
}
