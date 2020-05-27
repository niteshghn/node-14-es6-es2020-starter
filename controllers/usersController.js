import * as constants from '../constants/index.js';

const listUsers = async (req, res) => {
    const users = [
        {
            name: 'John', age: 40
        }, {
            name: 'Oliver', age: 25
        }, {
            name: 'Cristine', age: 26
        }
    ];
    return res.json({users})
}

const getRawData = async (req, res) => {
    let rawData = constants.rawData;
    rawData.message = constants.add(20,30);
    return res.json({rawData});
}

export {listUsers, getRawData};