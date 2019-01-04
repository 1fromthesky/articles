import articles from '../../fixtures';

export default (selectOption = articles.map((item) => {
    return {
        value: item.id,
        label: item.title
    };
}), action) => {
    return selectOption;
}
