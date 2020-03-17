import { Provider, APP_INITIALIZER } from '@angular/core';

import { Locale } from '../core/locale';
import { DictionaryInitServiceBase } from '../core/dictionary-init.service.base';

/**
 * Загрузчик словаря
 */
export function dictionaryLoaderFactory(dictionaryIniter: DictionaryInitServiceBase): () => Promise<Locale | never> {
    return () => dictionaryIniter.load().toPromise();
}

export const LOCALIZATION_MODULE_INIT_PROVIDER: Provider = {
    provide: APP_INITIALIZER,
    useFactory: dictionaryLoaderFactory,
    multi: true,
    deps: [DictionaryInitServiceBase]
};