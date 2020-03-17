import { Component } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Основной компонент приложения
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public title: string = 'app';

    constructor(
        private readonly router: Router
    ) {}

    /**
     * Переход на страницу
     */
    public goTo(state: string): void {
        this.router.navigate([state]);
    }
}