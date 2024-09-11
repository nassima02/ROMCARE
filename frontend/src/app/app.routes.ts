import { Routes } from '@angular/router';
import {HomeComponent} from "./screens/home/home.component";
import {ContactComponent} from "./screens/contact/contact.component";

export const routes: Routes = [
  { path: 'home', component: HomeComponent, title:'Accueil' },
  { path: 'contact', component: ContactComponent, title:'Contact' }
];

