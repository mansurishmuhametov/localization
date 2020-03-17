/**
 * Описание типа языка
 */
export interface ILanguage {
    /**
     * Значение: ru, en, ...
     */
    readonly Value: string;
    /**
     * Заголовок: En, Ru, ...
     */
    readonly Title: string;
    /**
     * Флаг страны (svg)
     */
    readonly Flag: string;
}