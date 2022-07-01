const path = require('path');
const file = path.resolve(__dirname, '../../info/hearthstone.csv')
const { withCSV } = require('with-csv');

const cardSet = async (req, res) => {
    // explorar el csv
    withCSV(file)
        .query(["cardSet"])
        .map(row => `${row.cardSet}`)
        .toArray()
        .then(result => {
        
            //contar todos los items dentro del resultado del csv
            const dataCount = result.reduce(function (prev, cur) {
                prev[cur] = (prev[cur] || 0) + 1;
                return prev
            }, {})
            const data = {
                countOfItems: result.length,
                data: dataCount
            }
            res.send(data);
    })
    .catch(e => {
        return res.status(500).json({error: e})
    })
}

module.exports = {
    cardSet
}
