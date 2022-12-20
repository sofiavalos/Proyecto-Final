import { Component } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-github-button',
  templateUrl: './github-button.component.html',
  styleUrls: ['./github-button.component.css']
})
export class GithubButtonComponent {
  faGithub = faGithub;
}
