const express   = require('express'),
    bodyParser  = require('body-parser'),
    _           = require('underscore'),
    json        = require('./movies.json'),
    app         = express(),
    request     = require('request');

app.set('port', process.env.PORT || 3500);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const router = new express.Router();

router.get('/test', (req, res)=>{
    var data = {
        name: 'Jason Krol',
        website: 'http://kroltech.com'
    };

    res.json(data);
});

router.get('/', (req, res)=>res.json(json));

router.post('/', (req, res)=>{
    // insert the new item into the collection
    if(req.body.Id && req.body.Title && req.body.Director && req.body.Year && req.body.Rating) {
        json.push(req.body);
        res.json(json);
    } else {
        res.json(500, { error: 'There was an error!' });
    }
});

router.put('/:id', (req, res)=>{
    // update the item in the collection
    if(req.params.id && req.body.Title && req.body.Director && req.body.Year && req.body.Rating) {
        _.each(json, (elem, index)=>{
            // find and update:
            if (elem.Id === req.params.id) {
                elem.Title = req.body.Title;
                elem.Director = req.body.Director;
                elem.Year = req.body.Year;
                elem.Rating = req.body.Rating;
            }
        });

        res.json(json);
    } else {
        res.json(500, { error: 'There was an error!' });
    }
});

router.delete('/:id', (req, res)=>{
    let indexToDel = -1;
    _.each(json, (elem, index)=>{
        if (elem.Id === req.params.id) {
            indexToDel = index;
        }
    });
    if (~indexToDel) {
        json.splice(indexToDel, 1);
    }
    res.json(json);
});

router.get('/external-api', (req, res)=>{
    request.get({
            uri: `http://localhost:${(process.env.PORT || 3500)}`
        }, (error, response, body)=>{
            if (error) { throw error; }

            var movies = [];
            _.each(JSON.parse(body), (elem, index)=>{
                movies.push({
                    Title: elem.Title,
                    Rating: elem.Rating
                });
            });
            res.json(_.sortBy(movies, 'Rating').reverse());
        });
});

router.get('/imdb', (req, res)=>{
    //console.log("err1")
    request.get({
            uri: 'http://sg.media-imdb.com/suggests/a/aliens.json'
        }, (err, response, body)=>{
            let data = body.substring(body.indexOf('(')+1);
            data = JSON.parse(data.substring(0,data.length-1));
            let related = [];
            _.each(data.d, (movie, index)=>{
                related.push({
                    Title: movie.l,
                    Year: movie.y,
                    Poster: movie.i ? movie.i[0] : ''
                });
            });

            res.json(related);
        });
});

app.use('/', router);

const server = app.listen(app.get('port'), ()=>{
    console.log(`Server up: http://localhost:${app.get('port')}`);
});
