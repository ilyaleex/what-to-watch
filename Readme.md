# Что посмотреть

«Что посмотреть» — онлайн кинотеатр нового поколения. Смотрите новинки абсолютно бесплатно и в лучшем качестве. Оставляйте отзывы, ставьте оценки и выбирайте только лучшее из мира большого кино.

1. Описание функциональности
1.1. Страницы приложения
Приложение состоит из нескольких страниц: Main (/), Sign In (/login), MyList (/mylist), Film (/films/:id), Add review (/films/:id/review), Player (/player/:id).

Страницы MyList, Add review доступны только авторизованным пользователям. Если пользователь не авторизован, то при переходе к этим страницам выполняется перенаправление на страницу Sign In.

Если пользователь не авторизован, то при попытке перехода к приватной странице выполняется перенаправление на страницу «Sign In» (/login).

В правом углу шапки отображается аватар пользователя и кнопка «Sign Out» (если пользователь авторизован) или ссылка «Sign In» (если пользователь не авторизован).

Клик по кнопке «Sign Out» приводит к завершению сеанса работы — выходу из закрытой части приложения.

Клик по аватарке пользователя выполняет переход на страницу MyList (/mylist).

Обращение к несуществующей странице (например, через адресную строку) не приводит к появлению ошибок в приложении, а корректно обрабатывается маршрутизацией. Пользователь перенаправляется на страницу «404». В самом простом случае это может быть страница с текстом 404 Not Found и ссылкой для перехода на главную страницу приложения.

1.1.1. Главная страница
На главной странице представлены жанры, превью фильмов.

Страница с детальным описанием фильма доступна всем пользователям.

В шапке страницы отображается постер и обложка промо-фильма.

Промо-фильм можно сразу посмотреть, нажав кнопку «Play» или добавить в список «My List».

Получение промо-фильма для главной страницы выполняется отдельным запросом к серверу (см. «Маршруты»).

После загрузки приложения отображаются 8 карточек фильмов произвольных жанров. В списке жанров выделен «All genres».

Список жанров строится на основании полученной с сервера информации о фильмах.

В списке жанров отображается не больше 9 жанров + All genres (выводит в список фильмы любых жанров).

1.1.1.1. Список фильмов
При смене жанра или получении информации о фильмах с сервера, в списке фильмов отображается не больше 8 фильмов.

Показ дополнительных фильмов выполняется нажатием на кнопку «Show more».

Нажатие на кнопку «Show more» добавляет в список очередные 8 фильмов или оставшиеся фильмы, если их меньше.

После отображения всех фильмов, соответствующих выбранному жанру, кнопка «Show more» скрывается.

При переходе с главной страницы на другие страницы приложения и обратно счётчик показанных фильмов сбрасывается и отсчёт начинается заново.

1.1.1.2. Карточка фильма в списке фильмов
В карточке фильма выводится следующая информация:

Изображение (превью фильма).
Название фильма.
При клике на изображение или заголовок фильма выполняется переход на страницу «Film» (/films/:id).

При наведении и удержании курсора мыши на изображении фильма, вместо изображения начинает воспроизводиться видео-превью фильма.

1.1.2. Страница с описанием фильма
Страница с детальным описанием фильма доступна по адресу /films/:id, где id — идентификатор фильма, полученный с сервера. Например: /films/123.

Страница с детальным описанием фильма доступна всем пользователям.

В шапке страницы приведён следующий набор информации:

Большой постер.
Обложка фильма.
Название фильма.
Жанр.
Год выхода на экраны.
Кнопка запуска просмотра.
Кнопка добавления в список «К просмотру».
Кнопка перехода на страницу добавления отзыва.
Более детальная информация о фильме представлена на трёх вкладках:

Overview. Общая информация.
Details. Расширенная информация.
Reviews. Отзывы.
1.1.2.1. Вкладки на странице описания фильма
Overview. Общая информация о фильме:

Описание фильма.
Оценка. Например, 8.9 (всегда один знак после запятой).
Описание оценки (Bad, Normal, Good, Very good, Awesome).
Количество голосов.
Режиссёр.
Список актёров.
Details. Расширенная информация:

Режиссёр.
Актёрский состав.
Продолжительность (часы, минуты).
Жанр.
Год выхода на экраны.
Reviews. Список отзывов пользователей.

1.1.2.2. Оценка фильма
Текстовое представление оценки фильма формируется по следующим правилам:
от 0 до 3 — Bad.
от 3 до 5 — Normal.
от 5 до 8 — Good.
от 8 до 10 — Very good.
10 — Awesome.
1.1.2.3. Похожие фильмы
Блок «More like this» показывает похожие фильмы. В блоке отображается до 4-х карточек схожих фильмов.

Список похожих фильмов загружается с сервера (см. «Маршруты»).

Карточки содержат тот же набор информации, что и карточки на главной странице.

Клик по карточке из блока «More like this» выполняет переход на страницу «Film» соответствующего фильма.

1.1.2.4. Отзывы
Каждый отзыв содержит:

Текст отзыва.
Оценка пользователя.
Имя пользователя.
Дата отзыва в формате: Месяц (полное название) день, год. Например: December 24, 2018.
Добавление нового отзыва выполняется по кнопке «Add review». Кнопка должна отображаться только для авторизованных пользователей.

1.1.3. Форма отправки отзыва
При нажатии на кнопку «Add review» выполняется переход на страницу Add review (/films/:id/review).

Страница доступна только авторизованным пользователям. Неавторизованные пользователи перенаправляются на страницу Sign In.

Пользователь выставляет оценку фильму от 1 до 10. Оценка выставляется путём выделения определённого количества звёзд. Если у фильма пока нет оценок от пользователей, его рейтинг на сервере — 0.

Текст отзыва должен быть не меньше 50 и не больше 400 символов.

Пока пользователь не поставил оценку и не ввел допустимый объём текста, кнопка отправки отзыва не активна.

При нажатии кнопки «Post» и отправке данных кнопка «Submit» и вся форма должны блокироваться. Разблокировка формы и кнопки происходит в случае успешной отправки или при возникновении ошибки.

В случае успешной отправки формы пользователь перенаправляется в карточку текущего фильма.

В случае возникновения ошибки следует уведомить пользователя. Способ отображения ошибки остаётся на усмотрение разработчика.

1.1.4. Страница MyList
Страница содержит информацию о фильмах, добавленных в список «К просмотру».

Данные для страницы «MyList» всегда загружаются с сервера. Для этого предусмотрен отдельный маршрут (см. раздел «Взаимодействие с сервером»).

Добавление в список «К просмотру» осуществляется при нажатии на кнопку «+ MyList» на странице «Film» и на главной странице для промо-фильма. Кнопка «+ MyList» заменяется на кнопку «✓ MyList».

Если фильм уже добавлен в список «К просмотру», нажатие на кнопку «✓ My List» удаляет фильм из списка. Кнопка «✓ MyList» заменяется на кнопку «+ MyList».

Страница «MyList» доступна только авторизованным пользователям. Неавторизованные пользователи перенаправляются на страницу «Sign In».

Клик по карточке фильма (изображение, заголовок) выполняет переход на страницу «Film» с детальным описанием фильма.

1.1.5. Страница Sign In
Страница «Sign in» доступна по адресу /login.

Для входа в сервис пользователь вводит логин (email) и пароль.

Поскольку у сервиса отсутствует возможность регистрации, логин и пароль могут быть любыми, но не пустыми.

В поле «логин» должен вводиться корректный email.

В поле «пароль» должен вводится валидный пароль. Под валидным паролем подразумевается пароль, который состоит минимум из одной буквы и цифры.

Страница доступна только неавторизованным пользователям. Авторизованных пользователей перенаправляет на главную страницу.

Информация об ошибках выводится в блок ошибок.

1.1.6. Просмотр фильмов
При нажатии на кнопку «Play» отрисовывается плеер и начинается показ выбранного фильма. В момент загрузки фильма отображается анимированный спиннер. Реализация спиннера остаётся на усмотрение разработчика.

Функциональность плеера:

«Play/Pause». Запуск/остановка видео.
«Fullscreen». Перевод в полноэкранный режим.
«Time Left». Оставшееся время проигрывания видео. Время выводится в формате -MM:SS — минуты, секунды или -HH:MM:SS — часы, минуты, секунды, если продолжительность видео больше одного часа, например:
Менее часа: -53:12;
Более часа: -01:45:35.
«Exit». Остановка просмотра. Плеер скрывается.
Плеер реализуется с помощью <video>.

Для перевода времени проигрывания видео в нужный формат разработчик может воспользоваться дополнительным пакетом на своё усмотрение.

1.1.7. Разное
В зависимости от состояния, некоторым элементам управления применяются соответствующие классы оформления. Например, активный фильтр и так далее. Примеры доступны в директории с вёрсткой (markup).

На кнопке «My List» (кнопка добавления фильма в список к просмотру), отображается количество фильмов, добавленных в список «к просмотру». Добавление фильма к просмотру, или удаление фильма из списка «к просмотру», приводит к немедленному пересчёту количества фильмов. Аналогичная функциональность предусмотрена на странице «My List».

2. Взаимодействие с сервером
Все необходимые данные загружаются с сервера.
Сервер доступен по адресу: https://10.react.pages.academy/wtw.
Спецификация по взаимодействию с сервером в формате OpenAPI — https://10.react.pages.academy/wtw/spec.
В случае недоступности сервера отображается информационное сообщение.
Сервер принимает данные в виде JSON-объекта.
Авторизация на сервере происходит на основании токена. Токен передаётся с каждым запросом в заголовке X-Token.
