import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { LanguageSelectionBaseSerivce } from './language-selection-base.service';
import { ILanguage } from './language.interface';
import { LocalizationRepositoryBase } from './localization-repository-base';
import { DictionaryBaseService } from './dictionary-base.service';

/**
 * Сервис для компонента LanguageSelectionComponent
 * Позволяет компоненту получить список доступных языков и установить выбранный
 */
@Injectable()
export class LanguageSelectionService implements LanguageSelectionBaseSerivce {
    constructor(
        private readonly localizationRepository: LocalizationRepositoryBase,
        private readonly dictionaryService: DictionaryBaseService
    ) { }

    /**
     * Возвращает доступные языки
     */
    public getLanguages(): Observable<ILanguage[]> {
        return this.dictionaryService.getLanguages();
    }

    /**
     * Сохраняет язык
     * @param language - язык интерфейса
     */
    public setLanguage(value: string): void {
        this.localizationRepository.setLanguage(value);
    }

    /**
     * Возвращает язык
     */
    public getLanguage(): Observable<string> {
        return this.localizationRepository.getLanguage();
    }
}
