/**
 * Устанавливает интерфейс для сервиса локализации времени
 */
export abstract class TimeBaseService {
    /**
     * Локализация времени
     * @param language - язык интерфейса
     */
    public abstract locale(language: string): void;
}
