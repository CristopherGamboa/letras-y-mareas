import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { RouterOutlet } from '@angular/router';

/**
 * @description
 * Layout principal de la aplicación
 */
@Component({
  selector: 'layout-main',
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './main.component.html'
})
export class MainComponent {

}
