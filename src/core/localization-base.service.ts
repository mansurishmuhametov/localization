import { Observable } from 'rxjs';

/**
 * Определяет интерфейс сервиса "Локализация"
 */
export abstract class LocalizationBaseService {
    /**
     * Запрос на получение словаря для перевода
     * @param language - язык интерфейса
     */
    public abstract getDictionary(language: string): Observable<object>;

    /**
     * Возвращает текущий язык
     */
    public abstract getCurrentLanguage(): Observable<string>;

    /**
     * Сохраняет выбранный языка в localStorage
     * @param language - выбранный язык
     */
    public abstract setLanguage(language: string): void;
}
