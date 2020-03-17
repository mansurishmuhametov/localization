import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

import { LocalizationBaseService } from './localization-base.service';
import { LocalizationRepositoryBase } from './localization-repository-base';
import { DictionaryBaseService } from './dictionary-base.service';

/**
 * Позволяет получить словарь для перевода и список доступных языков
 */
@Injectable()
export class LocalizationService implements LocalizationBaseService {
    constructor(
        private readonly localizationRepository: LocalizationRepositoryBase,
        private readonly dictionary: DictionaryBaseService
    ) {}

    /**
     * Запрос на получение словаря для перевода
     * @param language - язык интерфейса
     */
    public getDictionary(language: string): Observable<object> {
        return this.dictionary.get(language);
    }

    /**
     * Возвращает текущий язык
     */
    public getCurrentLanguage(): Observable<string> {
        return this.localizationRepository.getLanguage();
    }

    /**
     * Сохраняет выбранный языка в localStorage
     * @param language - выбранный язык
     */
    public setLanguage(language: string): void {
        this.localizationRepository.setLanguage(language);
    }
}
