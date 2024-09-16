
import { Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { ContactComponent } from './screens/contact/contact.component';
import {TarifsComponent} from "./screens/tarifs/tarifs.component";
import {DermopigmentationComponent} from "./screens/dermopigmentation/dermopigmentation.component";
import {FaqComponent} from "./screens/faq/faq.component";
import {AProposComponent} from "./screens/a-propos/a-propos.component";


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Optionnel, redirige vers la page d'accueil par défaut
  { path: 'home', component: HomeComponent, title: 'Accueil' },
  { path: 'contact', component: ContactComponent, title: 'Contact' },
  { path: 'a-propos', component: AProposComponent, title: 'A propos' },
  { path: 'tarifs', component:TarifsComponent, title: 'Tarifs' },
  { path: 'la-dermopigmentation-réparatrice', component: DermopigmentationComponent, title: 'La-dermopigmentation-réparatrice' },
  { path: 'faq', component: FaqComponent, title: 'Faq' },
];
