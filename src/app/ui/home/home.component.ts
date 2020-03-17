import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

import { TranslateBaseService } from 'src/core/translate-base.service';

/**
 * Основная страница приложения
 */
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    private instant: string;
    private key: string = 'quickCalendar.today';
    private emptyKey: string = 'common.empty';
    private currentDate: string;
    private inconsistent: string = 'common.inconsistent';

    private withParams: string;
    private keyWithParams: string = 'common.count';
    private keyParams: any = {
        count: 777
    };
    private noKey: string;
    private noKeyResult: string;
    private cacheKey: string;

    get Instant(): string {
        return this.instant;
    }

    get Key(): string {
        return this.key;
    }

    get EmptyKey(): string {
        return this.emptyKey;
    }

    get NoKey(): string {
        return this.noKey;
    }

    get NoKeyResult(): string {
        return this.noKeyResult;
    }

    get CurrentDate(): string {
        return this.currentDate;
    }

    get CacheKey(): string {
        return this.cacheKey;
    }

    get Inconsistent(): string {
        return this.inconsistent;
    }

    constructor(
        private readonly translate: TranslateBaseService
    ) {}
    /**
     * Инициализация главного компонента
     */
    public ngOnInit(): void {
        const empty: any = null;

        this.instant = this.translate.get(this.key);
        this.currentDate = moment().format('ll');
        this.withParams = this.translate.get(this.keyWithParams, this.keyParams);
        this.noKeyResult = this.translate.get(empty);
        this.cacheKey = this.translate.get('aaa.bbb');
    }
}
