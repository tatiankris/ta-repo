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
