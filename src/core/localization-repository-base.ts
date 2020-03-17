import { Observable } from 'rxjs';

/**
 * Хранилище настроек локализации
 */
export abstract class LocalizationRepositoryBase {
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
