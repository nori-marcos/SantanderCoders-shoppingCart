import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  public productList: any[] = [
    {
      id: 1,
      title: 'Buquê de Tulipas',
      price: 100,
      description:
        "As tulipas são flores elegantes e sofisticadas, e o maior significado é de 'amor perfeito'.",
      category: 'bouquet',
      image: './assets/tulipe.png',
      quantity: 1,
    },
    {
      id: 2,
      title: 'Buquê de Crisântemos',
      price: 60,
      description:
        'Os crisântemos são flores muito apreciadas na Ásia. A flor possui inúmeros significados como longevidade, rejuvenescimento, prosperidade, alegria, otimismo e fidelidade.',
      category: 'bouquet',
      image: './assets/chrysanthemum.png',
      quantity: 1,
    },
    {
      id: 3,
      title: 'Buquê de Dálias',
      price: 150,
      description:
        'As dálias são nativas do México e possuem diversas cores e tamanhos. As flores são o símbolo da união, comprometimento e esperança.',
      category: 'bouquet',
      image: './assets/dahlia.png',
      quantity: 1,
    },
    {
      id: 4,
      title: 'Buquê de Lírios',
      price: 60,
      description:
        'Os lírios, de modo geral, são associados ao romantismo e simbolizam a pureza, a inocência e o amor puro.',
      category: 'bouquet',
      image: './assets/lirium.png',
      quantity: 1,
    },
    {
      id: 5,
      title: 'Buquê de Orquídeas',
      price: 100,
      description:
        'As orquídeas são flores extraordinárias e são associadas ao amor, autoridade, poder, desejo e sedução.',
      category: 'bouquet',
      image: './assets/orchid.png',
      quantity: 1,
    },
    {
      id: 6,
      title: 'Buquê de Girassóis',
      price: 50,
      description:
        'O girassol é a flor do sol e significa felicidade. Suas cores quentes podem simbolizar calor, lealdade, entusiasmo e vitalidade.',
      category: 'bouquet',
      image: './assets/sunflower.png',
      quantity: 1,
    },
  ];

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  decrease(category: any) {
    if (category.quantity != 1) category.quantity = category.quantity - 1;
  }

  increase(category: any) {
    category.quantity = category.quantity + 1;
  }

  public itemsCart: any = [];

  addCart(category: any) {
    let cartDataNull = localStorage.getItem('localCart');
    if (cartDataNull == null) {
      let storeDataGet: any = [];
      storeDataGet.push(category);
      localStorage.setItem('localCart', JSON.stringify(storeDataGet));
    } else {
      var id = category.id;
      let index: number = -1;
      this.itemsCart = JSON.parse(localStorage.getItem('localCart')!);
      for (let i = 0; i < this.itemsCart.length; i++) {
        if (parseInt(id) === parseInt(this.itemsCart[i].id)) {
          this.itemsCart[i].quantity = category.quantity;
          index = i;
          break;
        }
      }
      if (index == -1) {
        this.itemsCart.push(category);
        localStorage.setItem('localCart', JSON.stringify(this.itemsCart));
      } else {
        localStorage.setItem('localCart', JSON.stringify(this.itemsCart));
      }
    }
    this.cartNumberFunction();
  }

  public cartNumber: number = 0;
  cartNumberFunction() {
    var cartValue = JSON.parse(localStorage.getItem('localCart')!);
    this.cartNumber = cartValue.length;
    this.auth.cartSubject.next(this.cartNumber);
  }
}
