const sidebar = require('../helpers/sidebar'),
    ImageModel = require('../models').Image;

module.exports = {
    index: (req, res)=>{
        var viewModel = {
            images: []
        };

        ImageModel.find({}, {}, { sort: { timestamp: -1 }}, (err, images)=>{
            if (err) { throw err; }

            viewModel.images = images;
            sidebar(viewModel, (viewModel)=>{
                res.render('index', viewModel);
            });
        });

    }
};
