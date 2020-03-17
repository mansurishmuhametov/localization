import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Locale } from './locale';
import { LocalizationBaseResolver } from './localization-base.resolver';
import { DictionaryInitServiceBase } from './dictionary-init.service.base';

/**
 * Основная задача: загрузить перевод и установить все необходимые настройки
 * приложение стартует только после того, как все настройки будут готовы
 */
@Injectable()
export class LocalizationResolver implements LocalizationBaseResolver {
    constructor(
        private readonly dictionaryInitService: DictionaryInitServiceBase
    ) { }

    /**
     * Позволяет загрузить локализацию до старта приложения
     */
    public resolve(): Observable<Locale | never> {
        return this.dictionaryInitService.load();
    }
}
