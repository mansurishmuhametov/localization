import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

import { Locale } from './locale';
import { DictionaryInitServiceBase } from './dictionary-init.service.base';
import { LocalizationBaseService } from './localization-base.service';

/**
 * Сервис иницилизации словаря
 */
@Injectable()
export class DictionaryInitService implements DictionaryInitServiceBase {
    constructor(
        private readonly translate: TranslateService,
        private readonly localizationService: LocalizationBaseService
    ) { }

    /**
     * Загрузить словарь
     */
    public load(): Observable<Locale | never> {
        return this.localizationService.getCurrentLanguage()
            .pipe(
                switchMap(language => this.getDictionary(language))
            );
    }

    /**
     * Устанавливает основные настройки для локализации
     * @param language - текущий язык системы
     * @param dictionary - словарь для текущего языка
     */
    private setLocalSettings(language: string, dictionary: object): void {
        this.translate.setTranslation(language, dictionary);
        this.translate.use(language);
    }

    /**
     * Получить словарь
     * @param language - язык
     */
    private getDictionary(language: string): Observable<Locale | never> {
        return this.localizationService.getDictionary(language)
            .pipe(
                map((dictionary: object) => {
                    this.setLocalSettings(language, dictionary);

                    return new Locale(language);
                })
            );
    }
}