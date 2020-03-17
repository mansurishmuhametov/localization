import { ILocalizationConfig } from './localization-config.interface';

/**
 * Язык интерфейса
 */
export class LocalizationConfig implements ILocalizationConfig {
    constructor(
        private readonly dictionaryPath: string
    ) { }

    get DictionaryPath(): string {
        return this.dictionaryPath;
    }
}
