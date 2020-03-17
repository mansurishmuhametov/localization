import { Component, OnInit } from '@angular/core';
import { TranslateBaseService } from 'src/public_api';

import * as moment from 'moment';

/**
 * Основная страница приложения
 */
@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    private instant: string;
    private key: string = 'quickCalendar.currentWeek';
    private emptyKey: string = 'common.empty';
    private currentDate: string;

    get Instant(): string {
        return this.instant;
    }

    get Key(): string {
        return this.key;
    }

    get EmptyKey(): string {
        return this.emptyKey;
    }

    get CurrentDate(): string {
        return this.currentDate;
    }

    constructor(
        private readonly translate: TranslateBaseService
    ) {}
    /**
     * Инициализация главного компонента
     */
    public ngOnInit(): void {
        this.instant = this.translate.get(this.key);
        this.currentDate = moment().format('ll');
    }
}
