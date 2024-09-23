import { Component } from '@angular/core';
import {ButtonComponent} from "../../shared/components/button/button.component";
import {BannerComponent} from "../../shared/components/banner/banner.component";

@Component({
  selector: 'app-dermopigmentation',
  standalone: true,
    imports: [
        ButtonComponent,
        BannerComponent
    ],
  templateUrl: './dermopigmentation.component.html',
  styleUrl: './dermopigmentation.component.css'
})
export class DermopigmentationComponent {

}
