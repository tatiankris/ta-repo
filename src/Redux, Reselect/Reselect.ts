export const selectAllPosts = (state: RootState) => state.posts.posts

export const selectPostById = (state: RootState, postId: string) =>
    state.posts.posts.find(post => post.id === postId)
///Тот что выше - не надо мемоизировать, т.к. возвращает нацденный объект, а не делает новый


export const selectPostsByUser = createSelector(
        //Входящие селекторы
    [
        selectAllPosts, //достает posts из стейта
        (state: RootState, userId: string) => userId /// один из нужных аргументов - зависимость Id
    ],
    // выходная функция получает эти значения в качестве аргументов - posts, userId,
    // Она будет работать при изменении любого входного значения
    (posts, userId) => posts.filter(post => post.user === userId)
)


//Получается selector,созданный при помощи createSelector, по дефолту будет делать перерасчет при изменении ЛЮБОГО входного параметра.

////Это к слову о фариках селекторов, чтобы каждый пользователь селектора получил его уникальный экземпляр.
///Это когда нужен параметрищированный селектор и много где сипользуется с разными параметрами.
///По сути фабрика селекторов создает кучу уникальных селекторов, которые делают одно и то же. Если 100 сущностей - 100 новых селекторов.
// А по другому никак, если нам нужен уникальный кэш для каждой сущности. (Размер кэша по умолчанию - 1, т.е. отталкивается от последних параметров.
const createFoo = () => (x) => 2 + x

const foo1 = createFoo()

const foo2 = createFoo()

foo1 === foo2 ////false
false

const foo = (x) => 2 + x

const foo11 = foo

const foo22 = foo

foo22 === foo11 ////true
true
