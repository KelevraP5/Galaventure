import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  nb_campagne : number = 165;

  // lienRS1 : string = 'lien discord';
  // lienRS2 : string = 'lien twitter';
  // lienRS3 : string = 'lien facebook';

  altRS1 : string = 'logo discord';
  altRS2 : string = 'logo twitter';
  altRS3 : string = 'logo facebook';
}
