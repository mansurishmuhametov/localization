import { Observable } from 'rxjs';

import { Locale } from './locale';

/**
 * Определяет интерфейс сервиса "Локализация"
 */
export abstract class LocalizationBaseResolver {
    /**
     * Позволяет загрузить локализацию до старта приложения
     */
    public abstract resolve(): Observable<Locale | never>;
}
