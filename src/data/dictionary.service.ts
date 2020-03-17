import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as _ from 'lodash';
import * as moment_ from 'moment';
const moment: typeof moment_ = moment_;

import { DictionaryBaseService } from '../core/dictionary-base.service';
import { ILanguage } from '../core/language.interface';
import { LanguageBaseService } from '../core/language-base.service';
import { languageListConfig } from '../bootstrap/configuration/language-list-config';
import { LanguageListJson } from './dto/language-list-dto';
import { LocalizationConfig } from '../core/localization-config';

/**
 * Отправить запрос на получение словаря перевода
 */
@Injectable()
export class DictionaryService implements DictionaryBaseService {
    private languages: ILanguage[] = [];

    constructor(
        private readonly config: LocalizationConfig,
        private readonly httpClient: HttpClient,
        private readonly languageService: LanguageBaseService
    ) {
        const sourceList: LanguageListJson = languageListConfig;
        this.languages = _.map(sourceList, item => this.languageService.create(item.value, item.title, item.flag));
    }

    /**
     * Запрос на получение словаря для перевода
     * @param language - язык интерфейса
     */
    public get(language: string): Observable<object> {
        const noCache: number = moment().valueOf();
        const path: string = (this.config && this.config.DictionaryPath) || 'assets/i18n';
        const dictionaryPath: string = `${path}/${language}.json?noCache=${noCache}`;

        return this.httpClient.get(dictionaryPath);
    }

    /**
     * Получение списка доступных языков
     */
    public getLanguages(): Observable<ILanguage[]> {
        return of(this.languages);
    }
}
