/**
 * Параметры локализации
 */
export class Locale {
    constructor(
        private readonly language: string
    ) { }

    get Language(): string {
        return this.language;
    }
}
