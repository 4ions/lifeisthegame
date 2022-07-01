const path = require('path');
const file = path.resolve(__dirname, '../../info/hearthstone.csv')
const { withCSV } = require('with-csv');

//obtener los limites para poder establecer la paginacion
const getPagination = (page, size) => {
    const limit = size ? +size : 100;
    const offset = page ? page * limit : 0;
    return { limit, offset };
  };

//separar la informacion obtenida por paginas y mostrarlas segun la pagina llamada
const getPagingData = (data, page, limit, offset) => {
    const currentPage = page ? +page : 0;
    totaldata = data.length;
    const cards = data.slice(offset,offset+limit);
    const totalItems = cards.length;
    const totalPages = Math.ceil(totaldata / limit);
    return { totalItems, cards, totalPages, currentPage };
};


const rarity = async (req, res) => {
    const { rare } = req.params;
    const filter = rare
    const { page, size } = req.query;
    withCSV(file)
    .query([])
    .filter(row => row.rarity === filter)
    .toArray()
        .then(result => {
            const { limit, offset } = getPagination(page, size);
            const response = getPagingData(result, page, limit, offset);
        return res.send(response)
        
    })
    .catch(e => {
        return res.status(500).json({error: e})
    })
   
}

const all = async (req, res) => {

    const { page, size } = req.query;
    withCSV(file)
    .query([])
    .toArray()
        .then(result => {
            const { limit, offset } = getPagination(page, size);
            const response = getPagingData(result, page, limit, offset);
        return res.send(response)
        
    })
    .catch(e => {
        return res.status(500).json({error: e})
    })
   
}

module.exports = {
    rarity,
    all
}