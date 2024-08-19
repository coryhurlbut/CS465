import { TripDataService } from './../services/trip-data.service';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.component.html',
  styleUrl: './trip-card.component.css',
  providers: [TripDataService, AuthenticationService]
})
export class TripCardComponent {
  @Input('trip') trip: any;

  constructor(private router: Router, private tripDataService: TripDataService, private authenticationService: AuthenticationService) {}

  ngOnInit(): void {}

  public isLoggedIn() {
    return this.authenticationService.isLoggedIn();
  }

  public editTrip(trip: Trip) {
    localStorage.removeItem('tripCode');
    localStorage.setItem('tripCode', trip.code);
    this.router.navigate(['edit-trip']);
  }

  public deleteTrip(trip: Trip) {
    this.tripDataService.deleteTrip(trip.code).subscribe({
      next: (data: any) => {
        console.log(data);
        this.router.navigate(['']);
      },
      error: (error: any) => {
        console.log('Error: ' + error);
      },
    });
    localStorage.removeItem('tripCode');
    this.router.navigate(['']);
  }
}
