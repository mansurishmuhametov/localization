import { Component, OnInit } from '@angular/core';

import { LocalizationBaseService } from '../../../core/localization-base.service';
import { TimeBaseService } from '../../../core/time-base.service';

/**
 * Основная страница приложения
 */
@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    constructor(
        private readonly localization: LocalizationBaseService,
        private readonly timeService: TimeBaseService
    ) { }
    /**
     * Инициализация главного компонента
     */
    public ngOnInit(): void {
        this.localization.getCurrentLanguage()
            .subscribe((language: string) => {
                this.timeService.locale(language);
            });
    }
}
