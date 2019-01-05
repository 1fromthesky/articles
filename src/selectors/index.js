import { createSelector } from 'reselect';


export const filtersSelector = state =>state.filters;
export const articlesSelector = state =>state.articles;

export const filterArticleSelector = createSelector(
    filtersSelector, articlesSelector,
    (filters, articles) => {
        const {
            selected,
            dateRange: { from, to }
        } = filters;

        return articles.filter((article) => {
            const published = Date.parse(article.date);

            return (
                (!selected.length ||
                    selected.find((selected) => selected.value === article.id)) &&
                (!from || !to || (published > from && published < to))
            )
        })
    }
);
