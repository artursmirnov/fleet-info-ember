import Ember from 'ember';
import GoogleTileLayerComponent from 'ember-leaflet-google-tile-layer/components/google-tile-layer';

GoogleTileLayerComponent.reopen({
    mapTypeChange: Ember.observer('type', function() {
        this._layer._google.setMapTypeId(this.get('type').toLowerCase());
    })
});

export default GoogleTileLayerComponent;