var models = require('../models');

module.exports = {
    popular: (callback)=>{
        models.Image.find({}, {}, { limit: 9, sort: { likes: -1 }},
            (err, images)=>{
                if (err) throw err;

                callback(null, images);
            });
    }
};