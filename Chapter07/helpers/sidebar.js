const Stats = require('./stats'),
    Images = require('./images'),
    Comments = require('./comments'),
    async = require('async');

module.exports = (viewModel, callback)=>{
    async.parallel([
        (next)=>{
            Stats(next);
        },
        (next)=>{
            Images.popular(next);
        },
        (next)=>{
            Comments.newest(next);
        }
    ], (err, results)=>{
        viewModel.sidebar = {
            stats: results[0],
            popular: results[1],
            comments: results[2]
        };

        callback(viewModel);
    });
};