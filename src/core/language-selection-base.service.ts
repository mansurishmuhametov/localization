import { Observable } from 'rxjs';

import { ILanguage } from './language.interface';

/**
 * Определяет интерфейс сервиса "Перевод"
 */
export abstract class LanguageSelectionBaseSerivce {
    /**
     * Возвращает текущий язык
     */
    public abstract getLanguages(): Observable<ILanguage[]>;

    /**
     * Сохраняет язык
     * @param language - язык интерфейса
     */
    public abstract setLanguage(value: string): void;

    /**
     * Возвращает язык
     */
    public abstract getLanguage(): Observable<string>;
}
