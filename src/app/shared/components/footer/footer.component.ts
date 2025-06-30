import { Component } from '@angular/core';
import { InstagramComponent } from "../svgs/instagram/instagram.component";
import { ClockComponent } from "../svgs/clock/clock.component";
import { LocationDotComponent } from "../svgs/location-dot/location-dot.component";

@Component({
  selector: 'app-footer',
  imports: [InstagramComponent, ClockComponent, LocationDotComponent],
  templateUrl: './footer.component.html'
})
export class FooterComponent {

}
