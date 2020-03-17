import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalizationModule } from '../../../bootstrap/localization.module';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './ui/contact/contact.component';

/**
 * Модуль Контактов
 */
@NgModule({
    imports: [
        CommonModule,
        ContactRoutingModule,
        LocalizationModule
    ],
    declarations: [
        ContactComponent
    ]
})
export class ContactModule { }
