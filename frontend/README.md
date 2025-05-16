Initial commit
Области хранения данных:

- база данных - JSON Server
- BFF (Backend for Frontend)
- redux store

Сущности приложения (информационные единицы):

- пользователь: БД(список пользователей), BFF(сессия текущего пользователя), redux store(отображение в браузере)

- роль пользователя: БД(список ролей), BFF(сессия пользователя с ролью), redux store(отображение в зависимости от роли)

- статья: БД(список статей), redux store(отображение)

- комментарии: БД(список), redux store(отображение)

Таблицы БД:

- пользователи - users: id / login / password / registred_at / role_id

- роли - roles: id / name

- статьи - posts: id / title / image_url / content / published_at

- комментарии - comments: id / author_id / post_id / content

Схема состояния на BFF:

- сессия текущего пользователя: login / password / role

Схема для редакс стора (на клиенте):

- user: id / login / roleId

- posts: массив post: id / title / imageUrl / publishedAt / commentsCount

- post: id / title / imageUrl / content / publishedAt / comments: массив comment: id / author / content / publishedAt

- users: массив user: id / login / registeredAt / role
