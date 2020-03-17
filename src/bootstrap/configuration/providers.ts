import { Provider } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { LocalizationService } from '../../core/localization.service';
import { LocalizationBaseService } from '../../core/localization-base.service';
import { LocalizationTranslateService } from '../../core/localization-translate.service';
import { LocalizationTranslateBaseService } from '../../core/localization-translate-base';
import { TranslateService } from '../../core/translate.service';
import { TranslateBaseService } from '../../core/translate-base.service';
import { LocalizationBaseResolver } from '../../core/localization-base.resolver';
import { LocalizationResolver } from '../../core/localization.resolver';
import { TimeBaseService } from '../../core/time-base.service';
import { TimeService } from '../../core/time.service';
import { LocalizationRepositoryBase } from '../../core/localization-repository-base';
import { LocalizationRepository } from '../../data/localization-repository';
import { LanguageBaseService } from '../../core/language-base.service';
import { LanguageService } from '../../core/language.service';
import { LanguageSelectionBaseSerivce } from '../../core/language-selection-base.service';
import { LanguageSelectionService } from '../../core/language-selection.service';
import { DictionaryBaseService } from '../../core/dictionary-base.service';
import { DictionaryService } from '../../data/dictionary.service';
import { DictionaryInitServiceBase } from '../../core/dictionary-init.service.base';
import { DictionaryInitService } from '../../core/dictionary-init.service';

export const rootProviders: Provider[] = [
    TranslateModule.forRoot().providers,
    {
        provide: TranslateBaseService,
        useClass: TranslateService
    },
    {
        provide: LocalizationBaseService,
        useClass: LocalizationService
    },
    {
        provide: LocalizationBaseResolver,
        useClass: LocalizationResolver
    },
    {
        provide: LocalizationTranslateBaseService,
        useClass: LocalizationTranslateService
    },
    {
        provide: TimeBaseService,
        useClass: TimeService
    },
    {
        provide: LocalizationRepositoryBase,
        useClass: LocalizationRepository
    },
    {
        provide: LanguageBaseService,
        useClass: LanguageService
    },
    {
        provide: LanguageSelectionBaseSerivce,
        useClass: LanguageSelectionService
    },
    {
        provide: DictionaryBaseService,
        useClass: DictionaryService
    },
    {
        provide: DictionaryInitServiceBase,
        useClass: DictionaryInitService
    }
];
