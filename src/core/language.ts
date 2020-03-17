import { ILanguage } from './language.interface';

/**
 * Язык интерфейса
 */
export class Language implements ILanguage {
    constructor(
        private readonly value: string,
        private readonly title: string,
        private readonly flag: string
    ) { }

    get Value(): string {
        return this.value;
    }

    get Title(): string {
        return this.title;
    }

    get Flag(): string {
        return this.flag;
    }
}
