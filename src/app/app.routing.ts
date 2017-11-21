import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { ErrorComponent } from './error/error.component';

const appRoutes: Routes = [
    {
        path: 'header',
        component: HeaderComponent,
    },
    {
        path:'error',
        component: ErrorComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
