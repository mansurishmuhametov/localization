import { Pipe, PipeTransform } from '@angular/core';

import { TranslateBaseService } from '../../core/translate-base.service';

/**
 * Возвращает перевод
 */
@Pipe({
    name: 'translate'
})
export class TranslatePipe implements PipeTransform {
    constructor(
        private readonly translate: TranslateBaseService
    ) { }

    /**
     * Возвращает перевод
     * @param key - ключ для перевода
     */
    public transform(key: string, params?: object): string {
        return this.translate.get(key, params);
    }
}
