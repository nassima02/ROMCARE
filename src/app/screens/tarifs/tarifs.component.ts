import { Component } from '@angular/core';
import {BannerComponent} from "../../shared/components/banner/banner.component";

@Component({
  selector: 'app-tarifs',
  standalone: true,
	imports: [
		BannerComponent
	],
  templateUrl: './tarifs.component.html',
  styleUrl: './tarifs.component.css'
})
export class TarifsComponent {

}
