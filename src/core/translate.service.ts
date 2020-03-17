import { Injectable } from '@angular/core';

import { TranslateBaseService } from './translate-base.service';
import { LocalizationTranslateBaseService } from './localization-translate-base';

/**
 * Отправить запрос на получение словаря перевода
 */
@Injectable()
export class TranslateService implements TranslateBaseService {
    constructor(
        private readonly translate: LocalizationTranslateBaseService
    ) { }

    /**
     * Возвращает перевод
     * @param key - ключ для перевода
     * @param params - параметры
     */
    public get(key: string, params?: object): string {
        if (!key) {
            return '';
        }

        // *** - специальный символ означает, что перевод не согласован
        // не показывается на бою

        const translated: string = this.translate.get(key, params);
        const noSpecialSymbol: string = translated.toString().replace('***', '');
        const result: string = noSpecialSymbol;

        return result;
    }
}
