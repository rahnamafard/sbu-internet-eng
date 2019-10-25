import turf from '@turf/turf'

export function featureToPolygon(polygons, feature) {
    let {type, coordinates} = feature.geometry;

    if(type === 'Polygon')
    {
        let polygon = turf.multiPolygon([coordinates], feature.properties);
        polygons.push(polygon);
    }
    else
    {
        console.log(polygon + ' is not a Polygon.')
    }
}