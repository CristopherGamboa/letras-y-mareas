import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Session } from '@core/interfaces/session';

/**
 * @description
 * Servicio de autenticación.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  router = inject(Router);

  /**
   * @description
   * Valida si existe una sesión de usuario en el almacenamiento local.
   * 
   * @returns {boolean} 'true' si la sesión existe, 'false' en caso contrario.
   */

  isLogged(): boolean {
    return !!localStorage.getItem('session');
  }

  /**
   * @description
   * Valida si existe una sesión de administrador en el almacenamiento local.
   * 
   * @returns {boolean} 'true' si la sesión existe, 'false' en caso contrario.
   */

  isAdmin(): boolean {
    return !!localStorage.getItem('admin-session');
  }

  /**
   * @description
   * Inicia una sesión de usuario o de administrador.
   * 
   * @param {string} email - Email del usuario.
   * @param {string} name - Nombre del usuario.
   * @param {boolean} admin - Indica si la sesión es de administrador.
   */

  login(email: string, name?: string, admin?: boolean) {
    let session: Session = { email: email, name: name ? name : 'John Doe' };

    if (admin) {
      localStorage.setItem('admin-session', JSON.stringify(session));
      this.router.navigate(['admin']);
    } else {
      localStorage.setItem('session', JSON.stringify(session));
      this.router.navigate(['auth/profile']);
    }
  }

  /**
   * @description
   * Cierra una sesión de usuario o de administrador.
   * 
   * @param {boolean} admin - Indica si la sesión es de administrador.
   */

  logout(admin?: boolean) {

    if (admin) {
      localStorage.removeItem('admin-session');
      this.router.navigate(['admin/auth/login']);
    } else{
      localStorage.removeItem('session');
      this.router.navigate(['auth/login']);
    }
  }

  /**
   * @description
   * Obtiene la sesión de usuario o de administrador.
   * 
   * @returns {Session | null} Sesión de usuario o de administrador o 'null' si no existe.
   */
  
  getSession(): Session | null {
    let session = localStorage.getItem('session');

    if (!session) 
      return null;

    return JSON.parse(session);
  }
}
