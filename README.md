## Features

-   [ ] 增加一个待办事项
-   [ ] 删除一个待办事项
-   [ ] 标记一个待办事项为已完成
-   [ ] 编辑一个待办事项的具体内容
-   [ ] 列出所有的待办事项
-   [ ] 列表界面支持翻页
-   [ ] 待办事项可以设置优先级
-   [ ] 待办事项可以设置 expire date
-   [ ] 支持按照不同的方式排序，如优先级，expire date

## Tech Stack

-   Bootstrap v4
-   [reactstrap](https://reactstrap.github.io/)
-   Django v1.8
-   Django REST Framework v3.6(to support Django v1.8)
-   Python v2.7

## Models

```js
const todo = {
    id,
    title,
    detail,
    done,
    priority,
    expires,
    createTime,
    updateTime,
};
/*
对于 priority, 有(高, 中, 低, 无) 四种优先级.(参考 Todoist)
*/
```

## RESTful API

-   Add: `POST /todos`
-   Delete: `DELETE /todos/:id`
-   Mark as done: `PATCH /todos/:id`
-   Modify: `PUT /todos/:id`
-   List all: `GET /todos`

## Todo

-   API version control
-   [Best practices for API versioning? [closed]](https://stackoverflow.com/questions/389169/best-practices-for-api-versioning)
