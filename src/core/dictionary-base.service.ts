import { Observable } from 'rxjs';

import { ILanguage } from './language.interface';

/**
 * Определяет интерфейс "Словаря"
 */
export abstract class DictionaryBaseService {
    /**
     * Запрос на получение словаря для перевода
     * @param language - язык интерфейса
     */
    public abstract get(language: string): Observable<object>;

    /**
     * Получение списка доступных языков
     */
    public abstract getLanguages(): Observable<ILanguage[]>;
}
