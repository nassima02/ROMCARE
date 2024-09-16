import { Component } from '@angular/core';
import {ButtonComponent} from "../../shared/components/button/button.component";

@Component({
  selector: 'app-contact',
  standalone: true,
    imports: [
        ButtonComponent
    ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {


  handleRdvClick() {
    window.open('https://www.doctolib.fr/infirmier/paris/romain-keryhuel', '_blank');
  }
}

