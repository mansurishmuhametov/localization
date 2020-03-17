import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './ui/contact/contact.component';

const routes: Routes = [
    {
        path: '',
        component: ContactComponent
    }
];

/**
 * Роуты для модуля Контактов
 */
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ContactRoutingModule { }
