# Стартовый шаблон

## Установка
### Устанавливаем gulp глобально
```
npm i gulp -global 
```
### Устанавливаем Gulp локально в проект
```
npm i gulp --save-dev
```
### Установка 
Если жалуеться на require-dir
```
npm install require-dir
```
### Команды для gulp
#### Cписок всех заданных задач
```
gulp --tasks
```
### Файловая структура
[src](/src/) - для хранения исходных файлов и директорию
- [components](/src/components/) - директория для компонентов
- [components/bem-blocks/](/src/components/bem-blocks/) - директория для БЭМ-блоков
- [components/page-blocks/](/src/components/page-blocks/) - директория для типовых блоков страницы, таких как хедер, футер и т.п.
- [fonts](/src/fonts/) - директория для шрифтов
- [img](/src/img/) - директория для изображений 
- [js](/src/js/) - директория для файлов JavaScript
- [scss](/src/scss/) - директория для файлов стилей
- [scss/base/](/src/scss/base/) - директория для базовых стилей, которые мы изменять не будем
- [svg](/src/svg/) - директория для файлов SVG
- [svg/css/](/src/svg/css) - директория для SVG-файлов, которые будут интегрироваться в CSS

[build](/build/) для готовых файлов проекта
