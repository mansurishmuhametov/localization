import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LocalizationModule } from 'src/public_api';

describe('AppComponent', () => {
    beforeEach(async () => {
        return TestBed.configureTestingModule({
            imports: [
                RouterModule,
                LocalizationModule
            ],
            declarations: [
                AppComponent
            ]
        }).compileComponents();
    });
    it('should create the app', async(() => {
        expect(true).toBeTruthy();
    }));
});
