import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../service/carrito.service';
import { Router } from '@angular/router';  
import { Response } from '../interface/product';
import { AlertController } from '@ionic/angular';
import { first } from 'rxjs/operators'; 

@Component({
  selector: 'app-carrito-product',
  templateUrl: './carrito-product.page.html',
  styleUrls: ['./carrito-product.page.scss'],
})
export class CarritoProductPage implements OnInit {

  carrito$ = this.carritoService.carrito$;
  total$ = this.carritoService.total$;

  constructor(private carritoService: CarritoService,
              private router: Router,
              private alertController: AlertController) { }

  goBackToHome() {
    this.router.navigate(['/home']);
  }

  removeItem(item: Response) {
    this.carritoService.removeItem(item);
  }

  async processPayment() {
    const carrito = await this.carrito$.pipe(first()).toPromise();

    if (!carrito || carrito.length === 0) {
      const alert = await this.alertController.create({
        header: 'Empty cart',
        message: 'No there products in the cart.',
        buttons: ['OK']
      });

      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Successfull pay',
        message: 'Your pay have been Successfull.',
        buttons: ['OK']
      });

      await alert.present();

      this.carritoService.clearCart();
      this.router.navigate(['/home']);
    }
  }

  ngOnInit() {}
}
