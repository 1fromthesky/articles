import { createSelector } from 'reselect'

export const idSelector = (_, props) => props.id

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

// export const articleSelector = (state, props) => {
//   const id = props.article ? props.article.id : props.articleId
//   return state.articles.getIn([`entities`, id])
// }

export const articleSelector = createSelector(
  articlesMapSelector,
  idSelector,
  (articles, id) => {
    return articles.get(id)
  }
)

export const commentsMapSelector = (state) => state.comments.entities
export const commentsLoadingSelector = createSelector(
  articleSelector,
  (article) => {
    return article.commentsLoading
  }
)
export const commentsLoadedSelector = createSelector(
  articleSelector,
  (article) => {
    return article.commentsLoaded
  }
)

export const createCommentSelector = () => {
  return createSelector(
    commentsMapSelector,
    idSelector,
    (comments, id) => {
      return comments.get(id)
    }
  )
}
