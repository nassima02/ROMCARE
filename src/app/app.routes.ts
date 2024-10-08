import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { ContactComponent } from './screens/contact/contact.component';
import { TarifsComponent } from './screens/tarifs/tarifs.component';
import { DermopigmentationComponent } from './screens/dermopigmentation/dermopigmentation.component';
import { FaqComponent } from './screens/faq/faq.component';
import { AProposComponent } from './screens/a-propos/a-propos.component';
import { MentionsLegalesComponent } from './screens/mentions-legales/mentions-legales.component'; // Assurez-vous que le chemin est correct

export const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent, title: 'Accueil' },
	{ path: 'la-dermopigmentation', component: DermopigmentationComponent, title: 'La Dermopigmentation' },
	{ path: 'tarifs', component: TarifsComponent, title: 'Tarifs' },
	{ path: 'a-propos', component: AProposComponent, title: 'À propos' },
	{ path: 'contact', component: ContactComponent, title: 'Contact' },
	{ path: 'faq', component: FaqComponent, title: 'FAQ' },
	{ path: 'mentions-legales', component: MentionsLegalesComponent, title: 'Mentions légales' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {
		scrollPositionRestoration: 'enabled', // Option pour restaurer la position de défilement
	})],
	exports: [RouterModule]
})
export class AppRoutingModule { }


