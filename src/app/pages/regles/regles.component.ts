import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "../../shared/header/header.component";
import {FooterComponent} from "../../shared/footer/footer.component";
import {ReglesComComponent} from "../../shared/blocRegles/reglesCommunes/reglesCom.component";
import {ReglesJoueursComponent} from "../../shared/blocRegles/reglesJoueurs/reglesJoueurs.component";
import {ReglesMJComponent} from "../../shared/blocRegles/reglesMJ/reglesMJ.component";
import {Classe1Component} from "../../shared/blocClasses/classe_1/classe1.component";
import {Classe2Component} from "../../shared/blocClasses/classe_2/classe2.component";
import {Classe3Component} from "../../shared/blocClasses/classe_3/classe3.component";
import {Classe4Component} from "../../shared/blocClasses/classe_4/classe4.component";


@Component({
  selector: 'app-regles',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ReglesComComponent, ReglesJoueursComponent, ReglesMJComponent, Classe1Component, Classe2Component, Classe3Component, Classe4Component],
  templateUrl: './regles.component.html',
  styleUrl: './regles.component.scss'
})
export class ReglesComponent {
  title : String = 'Regles';
}
