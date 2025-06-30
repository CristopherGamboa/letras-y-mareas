import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ArrowRightFromBracketComponent } from "../../components/svgs/arrow-right-from-bracket/arrow-right-from-bracket.component";
import { CalendarDaysComponent } from "../../components/svgs/calendar-days/calendar-days.component";
import { BookComponent } from "../../components/svgs/book/book.component";
import { AuthService } from '@core/services/auth.service';

/**
 * @description
 * Layout de zona de administradores
 */
@Component({
  selector: 'app-admin',
  imports: [RouterOutlet, NgOptimizedImage, RouterLink, ArrowRightFromBracketComponent, CalendarDaysComponent, BookComponent],
  templateUrl: './admin.component.html'
})
export class AdminComponent {
  authService = inject(AuthService);
}
