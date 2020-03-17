import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as _ from 'lodash';
import { TranslateModule } from '@ngx-translate/core';

import { LanguageSelectionComponent } from '../ui/language-selection/language-selection.component';
import { TranslatePipe } from '../ui/translate/translate.pipe';
import { rootProviders } from './configuration/providers';
import { ILocalizationConfig } from '../core/localization-config.interface';
import { LocalizationConfig } from '../core/localization-config';

/**
 * Все настройки связанные с локализацией приложения (перевод, время, валюта, ...)
 */
@NgModule({
    imports: [
        CommonModule,
        TranslateModule
    ],
    declarations: [
        LanguageSelectionComponent,
        TranslatePipe
    ],
    exports: [
        LanguageSelectionComponent,
        TranslatePipe
    ]
})
export class LocalizationModule {
    /**
     * Подключается в корневом модуле
     */
    public static forRoot(config?: ILocalizationConfig): ModuleWithProviders {
        return {
            ngModule: LocalizationModule,
            providers: [
                rootProviders,
                {
                    provide: LocalizationConfig,
                    useValue: config
                }
            ]
        };
    }
}