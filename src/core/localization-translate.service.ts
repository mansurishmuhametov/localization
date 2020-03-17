import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { TranslateService } from '@ngx-translate/core';

import { LocalizationTranslateBaseService } from './localization-translate-base';

/**
 * Перевод ключ - значение
 * значение зависит от выбранного языка
 */
@Injectable()
export class LocalizationTranslateService implements LocalizationTranslateBaseService {
    constructor(
        private readonly translate: TranslateService
    ) { }

    /**
     * Возвращает перевод
     * @param key - ключ для перевода
     * @param params - параметры
     */
    public get(key: string, params?: object): string {
        return this.translate.instant(key, params);
    }
}
