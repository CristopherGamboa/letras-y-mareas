import { Routes } from '@angular/router';
import { MainComponent } from '@shared/layouts/main/main.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./shared/layouts/main/main.component').then(m => m.MainComponent),
        children: [
            { 
                path: '', 
                redirectTo: 'home', 
                pathMatch: 'full' 
            },
            {
                path: 'home',
                loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
            },
            {
                path: 'events',
                loadComponent: () => import('./features/events/events.component').then(m => m.EventsComponent),
            },
            {
                path: 'reviews',
                loadComponent: () => import('./features/reviews/reviews.component').then(m => m.ReviewsComponent),
            },
            {
                path: 'reviews/:id',
                loadComponent: () => import('./features/reviews/pages/review-detail/review-detail.component').then(m => m.ReviewDetailComponent),
            },
            {
                path: 'auth/login',
                loadComponent: () => import('./features/auth/pages/login/login.component').then(c => c.LoginComponent)
            },
            {
                path: 'auth/register',
                loadComponent: () => import('./features/auth/pages/register/register.component').then(c => c.RegisterComponent)
            },
            {  
                path: 'auth/forgotten-password',
                loadComponent: () => import('./features/auth/pages/forgotten-password/forgotten-password.component').then(c => c.ForgottenPasswordComponent)
            },
            {
                path: 'auth/profile',
                loadComponent: () => import('./features/auth/pages/profile/profile.component').then(c => c.ProfileComponent)
            }
        ]
    },
    {
        path: 'admin/auth',
        loadComponent: () => import('./shared/layouts/admin-auth/admin-auth.component').then(c => c.AdminAuthComponent),
        children: [
            {
                path: 'login',
                loadComponent: () => import('./features/auth/pages/admin-login/admin-login.component').then(c => c.AdminLoginComponent)
            },
            {
                path: 'forgotten-password',
                loadComponent: () => import('./features/auth/pages/admin-forgotten-password/admin-forgotten-password.component').then(c => c.AdminForgottenPasswordComponent)
            }
        ]
    },
    {
        path: 'admin',
        loadComponent: () => import('./shared/layouts/admin/admin.component').then(c => c.AdminComponent),
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                loadComponent: () => import('./features/admin/pages/dashboard/dashboard.component').then(c => c.DashboardComponent)
            },
            {
                path: 'events',
                loadComponent: () => import('./features/admin/pages/events/events.component').then(c => c.EventsComponent)
            },
            {
                path: 'reviews',
                loadComponent: () => import('./features/admin/pages/reviews/reviews.component').then(c => c.ReviewsComponent)
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
