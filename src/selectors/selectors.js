import { createSelector } from 'reselect'

export const commentsSelector = (state) => state.comments
export const idSelector = (_, props) => props.id

export const createCommentSelector = () => {
  return createSelector(
    commentsSelector,
    idSelector,
    (comments, id) => {
      return comments.get(id)
    }
  )
}

export const articleLoadingSelector = (state) => state.articles.loadig
export const filtersSelector = (state) => state.filters
export const articlesMapSelector = (state) => state.articles.entities
export const articleListSelector = createSelector(
  articlesMapSelector,
  (articlesMap) => articlesMap.valueSeq().toJS()
)

export const filteredArticleSelector = createSelector(
  filtersSelector,
  articleListSelector,
  (filters, articles) => {
    const {
      selected,
      dateRange: { from, to }
    } = filters

    return articles.filter((article) => {
      const published = Date.parse(article.date)

      return (
        (!selected.length ||
          selected.find((selected) => selected.value === article.id)) &&
        (!from || !to || (published > from && published < to))
      )
    })
  }
)