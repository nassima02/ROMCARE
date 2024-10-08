import {AfterViewInit, Component} from '@angular/core';
import {BannerComponent} from "../../shared/components/banner/banner.component";
import {ButtonComponent} from "../../shared/components/button/button.component";
import {CommonModule} from '@angular/common';


@Component({
	selector: 'app-a-propos',
	standalone: true,
	imports: [
		BannerComponent,
		ButtonComponent,
		CommonModule,
	],
	templateUrl: './a-propos.component.html',
	styleUrls: ['./a-propos.component.css']
})
export class AProposComponent implements AfterViewInit {

	protected readonly events: any[] = [
		{id: 0, year: '2011', content: 'Obtention du Diplôme d’Etat Infirmier'},
		{id: 1, year: '2017', content: 'Formation Le toucher relationnel'},
		{id: 2, year: '2018', content: 'Début de l’activité libérale'},
		{id: 3, year: '2020', content: 'Formation Art Visuel association Savoir Dessiner'},
		{id: 4, year: '2022', content: 'Certification Hygiène et Salubrité Maud Professional Academy'},
		{id: 5, year: '2024', content: 'Formation Pigmentation Correctrice Maud Professional Academy'},
	];

	// Méthode d'initialisation des vidéos et de leurs boutons
	ngAfterViewInit() {
		this.initializeVideoButtons();
	}

	// Fonction pour initialiser les boutons de lecture
	private initializeVideoButtons() {
		const videoIds = ['video1', 'video2', 'video3'];
		videoIds.forEach(videoId => {
			const video = document.getElementById(videoId) as HTMLVideoElement;
			this.updateButtonState(videoId); // Initialiser l'état des boutons

			// Ajouter un écouteur d'événements pour la fin de la vidéo
			video.addEventListener('ended', () => {
				this.updateButtonState(videoId); // Met à jour l'état des boutons lorsque la vidéo se termine
			});
		});
	}

	togglePlay(videoId: string) {
		const video = document.getElementById(videoId) as HTMLVideoElement;
		if (video.paused) {
			this.playVideo(videoId, null); // Passer null si aucun événement n'est nécessaire
		} else {
			this.pauseVideo(videoId, null); // Passer null si aucun événement n'est nécessaire
		}
	}

	playVideo(videoId: string, event: MouseEvent | null) {
		const video = document.getElementById(videoId) as HTMLVideoElement;
		video.play();
		this.updateButtonState(videoId); // Mettre à jour l'état du bouton après avoir démarré la vidéo
		if (event) {
			event.stopPropagation(); // Empêche la propagation de l'événement au conteneur vidéo
		}
	}

	pauseVideo(videoId: string, event: MouseEvent | null) {
		const video = document.getElementById(videoId) as HTMLVideoElement;
		video.pause();
		this.updateButtonState(videoId); // Mettre à jour l'état du bouton après avoir mis en pause la vidéo
		if (event) {
			event.stopPropagation(); // Empêche la propagation de l'événement au conteneur vidéo
		}
	}

	private updateButtonState(videoId: string) {
		const video = document.getElementById(videoId) as HTMLVideoElement;
		const playButton = document.querySelector(`#${videoId} ~ .play-button`) as HTMLElement;
		const pauseButton = document.querySelector(`#${videoId} ~ .pause-button`) as HTMLElement;

		// Initialiser les boutons en fonction de l'état de la vidéo
		if (video.paused) {
			playButton.style.display = 'flex'; // Afficher le bouton de lecture
			pauseButton.style.display = 'none'; // Cacher le bouton pause
		} else {
			playButton.style.display = 'none'; // Masquer le bouton de lecture
			pauseButton.style.display = 'none'; // Cacher le bouton pause
		}
	}

}





