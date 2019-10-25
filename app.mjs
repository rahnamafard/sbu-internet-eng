import express from 'express'
import turf from '@turf/turf'
import { featureToPolygon } from './functions.mjs';

const app = express()
// const port = 3001
const port = process.env.PORT

app.use(express.json())
app.get('/', (req, res) => res.send('Hi! It\'s the first homework of Internet Engineering course :)'))

var polygons = [];

/*
 * A GET (/gis/testpoint) endpoint that receives a pair of parameters (lat, long) and returns a JSON structure
 * which has a member called polygons and it contains the name of the polygons that the point is inside them
 */
app.get('/gis/testpoint', function(req, res) {
    let { lat, long } = req.query;
    let point = turf.point([lat, long]);

    let response_json = {
        "polygons": []
    }

    polygons.forEach(function(polygon) {
        if(turf.booleanPointInPolygon(point, polygon))
        {
            response_json.polygons.push(polygon.properties.name);
        }
    });

    res.send(response_json);
})

/*
 * A PUT (/gis/addpolygon) endpoint that we can add a new polygon to server for subsequent get calls.
 */
app.put('/gis/addpolygon', function(req, res) {
    let { type } = req.body;

    if(type === "Feature")
    {
        let feature = req.body;
        featureToPolygon(polygons, feature);
    }
    else if(type === "FeatureCollection")
    {
        let features = req.body.features;
        features.forEach(feature => {
            featureToPolygon(polygons, feature);
        });
    }
    
    res.send(polygons)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))