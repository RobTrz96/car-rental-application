import { Injectable } from '@angular/core';
import { CarListing } from './carlisting';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  
  url = 'http://localhost:3000/cars';

  constructor() { }

  async getAllCarInfo() : Promise<CarListing[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getCarListingById(id: Number) : Promise<CarListing | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName + ' ' + lastName + ' ' + email);
  }

}
