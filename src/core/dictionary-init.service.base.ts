import { Observable } from 'rxjs';

import { Locale } from './locale';

/**
 * Сервис иницилизации словаря
 */
export abstract class DictionaryInitServiceBase {
    /**
     * Загрузить словарь
     */
    public abstract load(): Observable<Locale | never>;
}