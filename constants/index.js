const format = require('string-format-obj');

const rawData = {
    'fileFormat': 'mp3',
    'codec': 'amr',
    'defaultSort': 'artist',
    'pageSize': 10,
    'isConfigEnabled': true
}
const welcomeMessage = format(`Welcome {firstName}, to out site. You have earned {points} points`);

const add = (a, b) => {
    return a + b;
}

module.exports = {
    rawData: rawData, welcomeMessage: welcomeMessage, add: add
};