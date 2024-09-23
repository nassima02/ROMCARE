
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
  { path: 'la-dermopigmentation', component: DermopigmentationComponent, title: 'La-dermopigmentation' },
  { path: 'tarifs', component:TarifsComponent, title: 'Tarifs' },
  { path: 'a-propos', component: AProposComponent, title: 'A propos' },
  { path: 'contact', component: ContactComponent, title: 'Contact' },
  { path: 'faq', component: FaqComponent, title: 'Faq' },
];
