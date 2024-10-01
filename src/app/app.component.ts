import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { NgClass } from '@angular/common';
import {TimelineModule} from "primeng/timeline";

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, RouterLink, NgClass, TimelineModule],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	title = "ROMCARE Cabinet d'Infirmier libéral spécialisé en dermopigmentation médicale d’aréoles mammaires";
	isMenuOpen = false;

	constructor(private router: Router) {
		// Écoutez les événements de navigation
		this.router.events.subscribe((event) => {
			if (event instanceof NavigationEnd) {
				window.scrollTo(0, 0); // Défilement vers le haut de la page
			}
		});
	}

	// Ouvrir le menu de navigation en mobile
	toggleMenu() {
		this.isMenuOpen = !this.isMenuOpen;
	}

	// Surligner les liens de navigation
	isActive(route: string): boolean {
		return this.router.url === route;
	}
}



