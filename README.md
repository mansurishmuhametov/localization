# crumbs_localization-form

>Основная задача модуля: предоставить элементы для локализации приложения

## Установка
### npm
```bash
# Установка crumbs_localization-form
npm i --save crumbs_localization-form
```

## Импорт

### Главный модуль приложения

```typescript
// app.module.ts
import { LocalizationModule } from 'crumbs_localization-form';

@NgModule({
  imports: [
    LocalizationModule.forRoot()
  ]
})
export class AppModule {}
```

### Доченрие модули приложения

При использовании директивы _translate_ в дочерних модулях:

```typescript
// child.module.ts
import { LocalizationModule } from 'crumbs_localization-form';

@NgModule({
  imports: [
    LocalizationModule
  ]
})
export class ChildModule {}
```

## Загрузка словарей с переводом

Перевод должен быть загружен до старта приложения. Это возможно сделать двумя способами:

### 1. При помощи провайдера

```ts
// app.module.ts
import { LOCALIZATION_MODULE_INIT_PROVIDER } from 'crumbs_localization-form';

@NgModule({
    providers: [LOCALIZATION_MODULE_INIT_PROVIDER],
})
export class AppModule { }

```

### 2. При помощи Resolver через маршрутизатор

```typescript
// app-routing.module.ts
import { LocalizationResolver } from 'crumbs_localization-form';

export const appRoutes: Routes = [
    {
        path: '',
        component: MainComponent,
        resolve: {
            locale: LocalizationResolver
        }
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ]
})
export class AppRoutingModule {}
```

---

## Компонент выбора языка

```html
<!-- app.component.html -->
<crumbs_language-selection-form></crumbs_language-selection-form>
```

> примечание: выбранный язык сохраняется в localStorage

---

Переводы хранятся в каталоге **/assets/i18n/**
<br/>

## Специальный символ ***

При переводе символ *** просто удаляется
<br/>
таким образом можно отметить тот перевод, который, к примеру, нуждается в согласование
<br/>

<br/>