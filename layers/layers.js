var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_jalan_1 = new ol.format.GeoJSON();
var features_jalan_1 = format_jalan_1.readFeatures(json_jalan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_1.addFeatures(features_jalan_1);
var lyr_jalan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_1, 
                style: style_jalan_1,
                popuplayertitle: "jalan",
                interactive: true,
                title: '<img src="styles/legend/jalan_1.png" /> jalan'
            });

lyr_OSMStandard_0.setVisible(true);lyr_jalan_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_jalan_1];
lyr_jalan_1.set('fieldAliases', {'id': 'id', });
lyr_jalan_1.set('fieldImages', {'id': '', });
lyr_jalan_1.set('fieldLabels', {'id': 'no label', });
lyr_jalan_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});