import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgClass],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ROMCARE';

  constructor(private router: Router) {}

  // ouvrir le menu de navigation en mobile
  isMenuOpen = false;
  // fermer le menu de navigation en mobile
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
// surligner les liens de navigation
  isActive(route: string): boolean {
    return this.router.url === route;
  }
}


