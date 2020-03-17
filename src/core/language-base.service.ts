import { ILanguage } from './language.interface';

/**
 * Интерфейс для работы с сущностью "Язык"
 */
export abstract class LanguageBaseService {
    /**
     * Возвращает сущность язык
     * @param value - значение типа: 'ru', 'en'
     * @param title - заголовок видимый в интерфейсе
     * @param flag - флаг
     */
    public abstract create(value: string, title: string, flag: string): ILanguage;
}
