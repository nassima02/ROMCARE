import { Component } from '@angular/core';
import {BannerComponent} from "../../shared/components/banner/banner.component";

@Component({
	selector: 'app-faq',
	standalone: true,
	templateUrl: './faq.component.html',
	imports: [
		BannerComponent
	],
	styleUrls: ['./faq.component.css']
})
export class FaqComponent {

	// Méthode pour gérer l'accordéon
	toggleAccordion(event: Event): void {
		const button = event.currentTarget as HTMLElement;
		const content = button.nextElementSibling as HTMLElement;
		const icon = button.querySelector('i');

		// Toggle the hidden class on the content
		content.classList.toggle('hidden');

		// Change the icon from plus to minus
		if (content.classList.contains('hidden')) {
			icon?.classList.remove('fa-minus');
			icon?.classList.add('fa-plus');
		} else {
			icon?.classList.remove('fa-plus');
			icon?.classList.add('fa-minus');
		}
	}

}

