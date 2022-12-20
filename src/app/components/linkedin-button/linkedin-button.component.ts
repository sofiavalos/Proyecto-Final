import { Component } from '@angular/core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-linkedin-button',
  templateUrl: './linkedin-button.component.html',
  styleUrls: ['./linkedin-button.component.css']
})
export class LinkedinButtonComponent {
  faLinkedin = faLinkedin;
}
