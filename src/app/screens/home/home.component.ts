import {Component, AfterViewInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ButtonComponent} from "../../shared/components/button/button.component";

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [
		ButtonComponent
	],
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

	constructor(private router: Router, private route: ActivatedRoute) {
	}

	ngAfterViewInit() {
		this.route.fragment.subscribe(fragment => {
			if (fragment) {
				const element = document.getElementById(fragment);
				if (element) {
					element.scrollIntoView({behavior: 'smooth'});
				}
			}
		});
	}

	handleAproposClick() {
		// Naviguer vers l'onglet de contact
		this.router.navigate(['/a-propos']);
	}

	handleRdvClick() {
		window.open('https://www.doctolib.fr/infirmier/paris/romain-keryhuel', '_blank');
	}

	handleDermopigmentationClick() {
		// Naviguer vers l'onglet la dermopigmentation
		this.router.navigate(['/la-dermopigmentation']);
	}
}
