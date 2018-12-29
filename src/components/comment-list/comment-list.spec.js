import React from  'react';
import Enzyme, {render, shallow , mount} from 'enzyme';
import AdapterReact16 from 'enzyme-adapter-react-16';
import CommentList from './comment-list';
import articles from '../../fixtures';

Enzyme.configure({ adapter: new AdapterReact16() });

const wrapper = mount(<CommentList comments = {articles[0].comments} />);
wrapper
    .find(`.test--comments__button`)
    .at(0)
    .simulate(`click`);

describe(`Comment List`, () => {
    it(`should open comments on click`, () => {
        expect(wrapper.find(`.test--comments__body`).length).toEqual(1);
    });

    it(`should render comments`, () => {
        //const wrapper = render (<CommentList comments = {articles[0].comments} />);
        expect(wrapper.find(`.test--comments-list__item`).length).toEqual(articles[0].comments.length);
    });

    it(`should close comments on click`, async (done) => {
        await wrapper
            .find(`.test--comments__button`)
            .at(0)
            .simulate(`click`);
        done();
        expect(wrapper.find(`.test--comments-list__item`).length).toEqual(0);
        expect(wrapper.find(`.test--comments__body`).length).toEqual(0);

    });
});
