import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  products: any[] = [];
  product: any = { name: '', price: 0 }; // Initialisation vide
  productId: number = 0;
  errorMessage: string = '';
  showDetails: boolean = false; // Ajout de la variable pour contrôler l'affichage des détails

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.http.get('http://localhost:8080/api/products')
      .pipe(
        catchError((error) => {
          this.errorMessage = 'Error fetching products!';
          return of([]);
        })
      )
      .subscribe((data: any) => {
        this.products = data;
      });
  }

  addProduct() {
    this.product.price = Number(this.product.price); 
    console.log('Product to add:', this.product);
    this.http.post('http://localhost:8080/api/products', this.product)
      .pipe(
        catchError((error) => {
          this.errorMessage = 'Error adding product!';
          return of(null);
        })
      )
      .subscribe((data: any) => {
        if (data) {
          this.products.push(data);
          // Réinitialiser le formulaire
        }
      });
  }
  
  deleteProduct(productId: number) {
    console.log("Deleting product with ID: ", productId);
  
    this.http.delete(`http://localhost:8080/api/products/${productId}`)
      .pipe(
        catchError((error) => {
          this.errorMessage = 'Error deleting product!';
          return of(null);
        })
      )
      .subscribe(response => {
        if (response) {
          console.log('Product deleted successfully:', response);
        }
  
        // Mise à jour de la liste après suppression
        this.products = this.products.filter(product => product.id !== productId);
      });
  }
  
  
  

  getProductById(productId: number) {
    this.http.get(`http://localhost:8080/api/products/${productId}`)
      .pipe(
        catchError((error) => {
          this.errorMessage = 'Product not found!';
          this.product = { name: '', price: 0 }; // Réinitialiser si le produit n'est pas trouvé
          this.showDetails = false; // Cacher les détails si produit non trouvé
          return of(null);
        })
      )
      .subscribe((data: any) => {
        if (data) {
          this.product = data;
          this.errorMessage = ''; // Effacer tout message d'erreur
          this.showDetails = true; // Afficher les détails
        } else {
          this.product = { name: '', price: 0 }; // Réinitialisation si non trouvé
          this.showDetails = false; // Cacher les détails si produit non trouvé
        }
      });
  }

  toggleDetails() {
    this.showDetails = !this.showDetails; // Inverser l'état d'affichage des détails
  }
}
