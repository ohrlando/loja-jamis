import { Component } from '@angular/core';

@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.scss']
})
export class ProductGalleryComponent {
  products = [
    { name: 'Moldes de Vestido', price: 25.00, image: 'https://via.placeholder.com/200x200?text=Moldes' }
  ];
}
