import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { LocalizationModule } from 'src/bootstrap/localization.module';

import { AppComponent } from './app.component';
import { MainComponent } from './ui/main/main.component';
import { HomeComponent } from './ui/home/home.component';
import { LOCALIZATION_MODULE_INIT_PROVIDER } from '../bootstrap/localization-init-provider';
import { HttpClientModule } from '@angular/common/http';

/**
 * Основной модуль приложения
 */
@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        LocalizationModule.forRoot()
    ],
    declarations: [
        AppComponent,
        MainComponent,
        HomeComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }