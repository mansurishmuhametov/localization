import { Observable } from 'rxjs';

import { LocalizationResolver } from './localization.resolver';
import { DictionaryInitServiceBase } from './dictionary-init.service.base';

describe('LocalizationResolver', () => {
    let resolver: LocalizationResolver;
    let initer: jasmine.SpyObj<DictionaryInitServiceBase>;

    beforeEach(() => {
        initer = jasmine.createSpyObj('initer', ['load']);
        initer.load.and.returnValue(new Observable());
        resolver = new LocalizationResolver(initer);
    });

    it('Должен загрузить словари', () => {
        resolver.resolve();
        expect(initer.load).toHaveBeenCalledTimes(1);
    });
});