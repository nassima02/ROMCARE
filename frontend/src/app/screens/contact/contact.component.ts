import { Component } from '@angular/core';
import {ButtonComponent} from "../../shared/components/button/button.component";
import {BannerComponent} from "../../shared/components/banner/banner.component";

@Component({
  selector: 'app-contact',
  standalone: true,
    imports: [
        ButtonComponent,
        BannerComponent
    ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {


  handleRdvClick() {
    window.open('https://www.doctolib.fr/infirmier/paris/romain-keryhuel', '_blank');
  }
}

