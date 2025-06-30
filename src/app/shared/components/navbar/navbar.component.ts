import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavItem } from '@core/interfaces/nav-item';
import { NavItemComponent } from '../nav-item/nav-item.component';
import { UserComponent } from "../svgs/user/user.component";

@Component({
  selector: 'app-navbar',
  imports: [NavItemComponent],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  navItems = input.required<NavItem[]>();
}
