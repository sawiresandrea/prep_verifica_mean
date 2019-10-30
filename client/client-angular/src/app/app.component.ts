import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //HTTP CLIENT
import { Product } from './products.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  results: Product[];
  private BASE_URL:string = '/api';
    // Inject HttpClient into your component or service.
    constructor(private http: HttpClient) {}

    ngOnInit(): void {
      // Make the HTTP request:
      this.http.get<Product[]>('https://3000-e2901b80-a917-4cdd-824a-9727c7f06eb1.ws-eu0.gitpod.io/api/products').subscribe(data  => {
        // Read the result field from the JSON response.
        console.log(data);
        this.results = data;
        console.log(this.results);
      });
    }
}
