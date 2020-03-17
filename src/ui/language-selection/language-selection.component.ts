import { Component, OnInit, ElementRef, HostListener, ChangeDetectionStrategy } from '@angular/core';
import * as _ from 'lodash';

import { Observable, combineLatest } from 'rxjs';
import { ILanguage } from '../../core/language.interface';
import { LanguageSelectionBaseSerivce } from '../../core/language-selection-base.service';

/**
 * Позволяет выбрать язык в рамках всего приложения
 */
@Component({
    selector: 'crumbs_language-selection-form',
    templateUrl: './language-selection.component.html',
    styleUrls: ['./language-selection.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguageSelectionComponent implements OnInit {
    private current: ILanguage;
    private isOpen: boolean;
    private isFirstTime: boolean = true;
    private languages: ILanguage[];

    constructor(
        private readonly elementRef: ElementRef,
        private readonly languageSelectionSerivce: LanguageSelectionBaseSerivce
    ) { }

    get Languages(): ILanguage[] {
        return this.languages;
    }

    get Current(): ILanguage {
        return this.current;
    }

    get IsOpen(): boolean {
        return this.isOpen;
    }

    /**
     * Инициализация компонента переключения языков
     */
    public ngOnInit(): void {
        const languages$: Observable<ILanguage[]> = this.languageSelectionSerivce.getLanguages();
        const currentLanguage$: Observable<string> = this.languageSelectionSerivce.getLanguage();

        combineLatest(languages$, currentLanguage$)
            .subscribe(([languages, currentLanguage]) => {
                this.languages = languages;
                const language: ILanguage = _.find(this.languages, { Value: currentLanguage });

                this.setLanguage(language);

                this.isFirstTime = false;
            });
    }

    /**
     * Пользователь выбрал язык
     */
    public languageSelected(language: ILanguage): void {
        this.setLanguage(language);
    }

    /**
     * Устанавливает язык
     */
    public setLanguage(language: ILanguage): void {
        if (this.current && (this.current.Value === language.Value)) {
            this.close();

            return;
        }

        this.current = language;

        if (!this.isFirstTime) {
            this.languageSelectionSerivce.setLanguage(this.current.Value);
            this.reload();
        }
    }

    /**
     * Открывает выпадающее меню с выбором языка
     */
    public open(): void {
        this.isOpen = !this.isOpen;
    }

    /**
     * Закрывает выпадающее меню
     */
    public close(): void {
        this.isOpen = false;
    }

    /**
     * Закрывает выпадающее меню
     */
    @HostListener('document:click')
    public onOutsideClick(): void {
        if (!this.elementRef.nativeElement.contains(event.target) && this.isOpen) {
            this.close();
        }
    }

    /**
     * Перезагружает интерфейс
     */
    private reload(): void {
        window.location.reload();
    }
}
