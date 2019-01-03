export default (count = 0, action) => {
    return action.type === `INCREMENT` ? count + 1 : count;
}
