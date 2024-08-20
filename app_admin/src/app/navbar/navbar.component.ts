import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core'; 
import { CommonModule } from '@angular/common'; 
import { RouterLink, RouterLinkActive } from '@angular/router'; 

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  constructor(
    private authenticationService: AuthenticationService) {}
    
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  public onLogout():void {
    return this.authenticationService.logout();
  }
}
