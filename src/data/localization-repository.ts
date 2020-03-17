import { Injectable } from '@angular/core';

import { LocalizationRepositoryBase } from '../core/localization-repository-base';
import { Observable, of } from 'rxjs';

/**
 * Хранит выбранный язык
 */
@Injectable()
export class LocalizationRepository implements LocalizationRepositoryBase {
    private defaultLanguage: string = 'ru';
    private storageKey: string = 'language';

    /**
     * Сохраняет язык
     * @param language - язык интерфейса
     */
    public setLanguage(value: string): void {
        localStorage.setItem(this.storageKey, value);
    }

    /**
     * Возвращает язык
     */
    public getLanguage(): Observable<string> {
        const lan: string = localStorage.getItem('language');

        if (!lan) {
            this.setLanguage(this.defaultLanguage);

            return of(this.defaultLanguage);
        } else {
            return of(lan);
        }
    }
}
