import { Injectable } from '@angular/core';

import { TimeBaseService } from './time-base.service';
import * as moment from 'moment';

/**
 * Устанавливает необходимые настройки для локализации времени
 */
@Injectable()
export class TimeService implements TimeBaseService {
    /**
     * Локализация времени
     * @param language - язык интерфейса
     */
    public locale(language: string): void {
        moment.locale(language);
    }
}
