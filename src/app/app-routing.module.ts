import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './ui/main/main.component';
import { HomeComponent } from './ui/home/home.component';
import { LocalizationBaseResolver } from '../core/localization-base.resolver';

export const appRoutes: Routes = [
    {
        path: '',
        component: MainComponent,
        resolve: {
            locale: LocalizationBaseResolver
        },
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/home'
            },
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'contact',
                loadChildren: './modules/contact/contact.module#ContactModule'
            }
        ]
    }
];

/**
 * Объявляет маршруты приложения
 */
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    declarations: [],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {}