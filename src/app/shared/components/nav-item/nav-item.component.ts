import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Color } from '@core/enums/color';
import { NavItemIcon } from '@core/enums/nav-item-icon';
import { UserComponent } from "../svgs/user/user.component";

@Component({
  selector: 'app-nav-item',
  imports: [RouterLink, RouterLinkActive, UserComponent],
  templateUrl: './nav-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavItemComponent {
  route = input.required<string>();
  label = input.required<string>();
  color = input<Color>(Color.WarmGold);
  icon = input<NavItemIcon | null>(null);
}
