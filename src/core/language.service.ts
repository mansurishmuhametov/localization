import { Injectable } from '@angular/core';

import { LanguageBaseService } from './language-base.service';
import { ILanguage } from './language.interface';
import { Language } from './language';

/**
 * Для работы с сущностью язык
 */
@Injectable()
export class LanguageService implements LanguageBaseService {
    /**
     * Возвращает сущность язык
     * @param value - значение типа: 'ru', 'en'
     * @param title - заголовок видимый в интерфейсе
     * @param flag - флаг
     */
    public create(value: string, title: string, flag: string): ILanguage {
        return new Language(value, title, flag);
    }
}
