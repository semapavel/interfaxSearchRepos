# Поиск репозиториев на github
1. Создал проект на React
2. Начальная страница содержит строку поиска и кнопку поиска по введеному запросу. Изначально выводится список пользователей, у которых больше 0 подписчиков. Запросы выполняются с помощью библиотеки "axios"
3. На второй странице выводится найденный пользователь, также таблица со списком репозиториев, все данные, после запроса, хранятся в store, как и в первом случае 
4. На тетьей странице выводятся все коммиты к выбранному репозиторию, также после запроса на сервер данные хранятся в store
5. store объеденяет в себе 3 reducer'a с помощью функции "combineReducers", также для асинхронных запросов используется "redux-thunk"
6. Для сборки приложения используется "webpack"
7. Также используются встроенные хуки в "react", "react-redux": "useEffect" - для выполнения запросов только по изменениям в данных запроса, "useDispatch" - для передачи данных в хранилище, "useSelector" - для получения данных из store
8. Пока выполняется запрос и загружается страница, создал индикатор загрузки
