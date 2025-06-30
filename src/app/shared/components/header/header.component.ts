import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Color } from '@core/enums/color';
import { NavItem } from '@core/interfaces/nav-item';
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterLink } from '@angular/router';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { NavItemIcon } from '@core/enums/nav-item-icon';

@Component({
  selector: 'app-header',
  imports: [NavbarComponent, RouterLink, NgOptimizedImage, NgClass],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  isMenuOpen = signal<boolean>(false);

  navItems: NavItem[] = [
    { route: '/home', label: 'Inicio', color: Color.WarmGold },
    { route: '/events', label: 'Eventos', color: Color.WarmGold },
    { route: '/reviews', label: 'Reseñas', color: Color.WarmGold },
    { route: '/auth/login', label: '', color: Color.AndesBlue, icon: NavItemIcon.User },
  ];
}
