import React from 'react'
import Enzyme, { render, shallow, mount } from 'enzyme'
import AdapterReact16 from 'enzyme-adapter-react-16'
import DecoratedArticleList, { ArticleList } from './article-list'
import articles from '../../fixtures'

Enzyme.configure({ adapter: new AdapterReact16() })

describe(`Article List`, () => {
  it(`should render articles`, () => {
    const wrapper = shallow(<ArticleList articles={articles} />)
    expect(wrapper.find(`.test--article-list__item`).length).toEqual(
      articles.length
    )
  })

  it(`should render all articles closed`, () => {
    const wrapper = render(<ArticleList articles={articles} />)
    expect(wrapper.find(`.test--article__body`).length).toEqual(0)
  })

  it(`should open article on click`, () => {
    const wrapper = mount(<DecoratedArticleList articles={articles} />)
    wrapper
      .find(`.test--article__button`)
      .at(0)
      .simulate(`click`)

    expect(wrapper.find(`.test--article__body`).length).toEqual(1)
  })

  it(`should close article on click`, async (done) => {
    const wrapper = mount(<DecoratedArticleList articles={articles} />)
    await wrapper
      .find(`.test--article__button`)
      .at(0)
      .simulate(`click`)
    await wrapper
      .find(`.test--article__button`)
      .at(0)
      .simulate(`click`)
    done()
    expect(wrapper.find(`.test--article-list__item`).length).toEqual(0)
    expect(wrapper.find(`.test--article__body`).length).toEqual(0)
  })
})
