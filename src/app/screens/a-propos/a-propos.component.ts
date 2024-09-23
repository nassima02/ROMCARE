import { Component } from '@angular/core';
import {BannerComponent} from "../../shared/components/banner/banner.component";

@Component({
  selector: 'app-a-propos',
  standalone: true,
    imports: [
        BannerComponent
    ],
  templateUrl: './a-propos.component.html',
  styleUrl: './a-propos.component.css'
})
export class AProposComponent {

}
