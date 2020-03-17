import { TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';

import { Locale } from './locale';
import { DictionaryInitService } from './dictionary-init.service';
import { LocalizationBaseService } from './localization-base.service';

describe('DictionaryInitService', () => {
    let service: DictionaryInitService;
    let traslateSpy: jasmine.SpyObj<TranslateService>;
    let localeSpy: jasmine.SpyObj<LocalizationBaseService>;

    beforeEach(() => {
        traslateSpy = jasmine.createSpyObj('trans', ['setTranslation', 'use']);
        localeSpy = jasmine.createSpyObj('locale', ['getCurrentLanguage', 'getDictionary']);

        service = new DictionaryInitService(traslateSpy, localeSpy);
    });

    describe('Загрузка языков', () => {
        const lang: string = 'jp';
        const dictionary: object = {
            someKey: 'someTranslate'
        };

        beforeEach(() => {
            localeSpy.getCurrentLanguage.and.returnValue(of(lang));
            localeSpy.getDictionary.and.returnValue(of(dictionary));
            service.load().subscribe();
        });

        it('Должен запросить текущий язык', () => {
            expect(localeSpy.getCurrentLanguage).toHaveBeenCalledTimes(1);
        });

        it('Должен запросить словарь по текущему языку', () => {
            expect(localeSpy.getDictionary).toHaveBeenCalledTimes(1);
            expect(localeSpy.getDictionary).toHaveBeenCalledWith(lang);
        });

        it('Должен задать словарь', () => {
            expect(traslateSpy.setTranslation).toHaveBeenCalledTimes(1);
            expect(traslateSpy.setTranslation).toHaveBeenCalledWith(lang, dictionary);
        });

        it('Должен задать язык', () => {
            expect(traslateSpy.use).toHaveBeenCalledTimes(1);
            expect(traslateSpy.use).toHaveBeenCalledWith(lang);
        });

        it('Должен вернуть локаль', () => {
            const expLocale: Locale = new Locale(lang);
            service.load().subscribe((locale: Locale) => {
                expect(locale).toEqual(expLocale);
            });
        });
    });
});