import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  standalone: true,
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() text: string = '';  // Le texte du bouton
  @Output() onClick = new EventEmitter<void>();  // Événement à émettre lors du clic
  @Input() additionalClasses!: string;

  handleClick() {
    this.onClick.emit();  // Émet l'événement lors du clic
  }

  handleContactClick() {

  }
}

