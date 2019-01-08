import { createSelector } from 'reselect';

export const commentsSelector = state => state.comments;
export const idSelector = (_, props) => props.id;


export const createCommentSelector = () => {
    return createSelector(
        commentsSelector,
        idSelector,  (comments, id) => {
            return comments[id];
        }
    );
};


export const filtersSelector = state => state.filters;
export const articlesSelector = state => state.articles;

export const filterArticleSelector = createSelector(
    filtersSelector, articlesSelector,
    (filters, articles) => {
        const {
            selected,
            dateRange: { from, to }
        } = filters;

        // const filteredArticles = {};
        // for (let key in articles) {
        //     const article = articles[key];
        //     const published = Date.parse(article.date);
        //     const checkFilter = (
        //         (!selected.length ||
        //             selected.find((selected) => selected.value === article.id)) &&
        //         (!from || !to || (published > from && published < to))
        //     );
        //
        //     if (checkFilter) {
        //         filteredArticles[key] = article;
        //     }
        // }
        //
        // return Object.keys(filteredArticles);

        const keysArticles = Object.keys(articles);

        return keysArticles.filter((articleId) => {
            const article = articles[articleId];
            const published = Date.parse(article.date);

            return (
                (!selected.length ||
                    selected.find((selected) => selected.value === article.id)) &&
                (!from || !to || (published > from && published < to))
            )
        })
    }
);

export const articleSelector = createSelector (
    articlesSelector,
    idSelector,  (articles, id) => {
        return articles[id];
    }
);

// export const articleSelector = () => {
//     return createSelector (
//         articlesSelector,
//         idSelector,  (articles, id) => {
//             return articles[id];
//         }
//     )
// };