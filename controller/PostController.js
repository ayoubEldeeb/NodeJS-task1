const helper = require('../helper/help.json');
exports.post = (req ,res) => {
    res.json({
        msg : helper
    })
}