import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../car.service';
import { CarListing } from '../carlisting';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'car-details-view',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  
  

  route: ActivatedRoute = inject(ActivatedRoute);
  carService = inject(CarService);
  carListing: CarListing | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor() {
    const carListingId = Number(this.route.snapshot.params['id']);
    this.carService.getCarListingById(carListingId).then(carListing => {
      this.carListing = carListing;
    });
  };

  submitApplication() {
    this.carService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '' 
    );
    alert("Thanks for applying, we'll contact you within 24 hours.");
  };


  
}
