import { Component } from '@angular/core';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-discord-button',
  templateUrl: './discord-button.component.html',
  styleUrls: ['./discord-button.component.css']
})
export class DiscordButtonComponent {
  faDiscord = faDiscord

}
