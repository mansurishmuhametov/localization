/**
 * Определяет интерфейс сервиса "Перевод"
 */
export abstract class TranslateBaseService {
    /**
     * Возвращает перевод
     * @param key - ключ для перевода
     * @param params - параметры
     */
    public abstract get(key: string, params?: object): string;
}
