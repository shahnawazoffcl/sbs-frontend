import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {


  
  menuOpen: boolean = false;

  // Function to toggle the menu visibility
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}


  


