import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarListing } from '../carlisting';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-car-listing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './car-listing.component.html',
  styleUrls: ['./car-listing.component.css']
})
export class CarListingComponent {
  @Input() carListing!:CarListing;
}
