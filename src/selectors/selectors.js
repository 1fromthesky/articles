import { createSelector } from 'reselect'

export const idSelector = (_, props) => props.id

export const commentsMapSelector = (state) => state.comments.entities
export const commentsLoadingSelector = (state) => state.comments.loading
export const commentsLoadedSelector = (state) => state.comments.loaded

export const createCommentSelector = () => {
  return createSelector(
    commentsMapSelector,
    idSelector,
    (comments, id) => {
      return comments.get(id)
    }
  )
}

export const filtersSelector = (state) => state.filters
export const articlesLoadingSelector = (state) => state.articles.loading
export const articlesLoadedSelector = (state) => state.articles.loaded
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

export const articleLoadedSelector = (state, props) => {
  return state.articles.getIn([`entities`, props.article.id]).loaded
}
