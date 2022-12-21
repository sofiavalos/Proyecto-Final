import { Component } from '@angular/core';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-linkedin-button',
  templateUrl: './linkedin-button.component.html',
  styleUrls: ['./linkedin-button.component.css']
})
export class LinkedinButtonComponent {
  faLinkedinIn = faLinkedinIn
}
