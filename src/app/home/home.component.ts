import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarListingComponent } from '../car-listing/car-listing.component';
import { CarListing } from '../carlisting';
import { CarService } from '../car.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarListingComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  carListingList: CarListing[] = [];
  carService: CarService = inject(CarService);
  filteredListingList: CarListing[] = [];
  constructor() {
    this.carService.getAllCarInfo().then((carListingList: CarListing[]) => {
      this.carListingList = carListingList;
      this.filteredListingList = carListingList;
    });
  }

  filteredResults(text: string) {
    if (!text) this.filteredListingList = this.carListingList;

    this.filteredListingList = this.carListingList.filter(
      carListing => carListing?.brand.toLowerCase().includes(text.toLowerCase())
    );
  }

}
