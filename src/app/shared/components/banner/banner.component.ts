import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
	@Input() title: string = ''; // Titre par défaut vide ou vous pouvez mettre un titre par défaut
}
