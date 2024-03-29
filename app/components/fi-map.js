import Ember from 'ember';
import LeafletMapComponent from './leaflet-map';

export default LeafletMapComponent.extend({
    classNames: ['fi-map'],

    state: Ember.inject.service('map-state'),

    lat: Ember.computed.alias('state.lat'),
    lng: Ember.computed.alias('state.lon'),
    zoom: Ember.computed.alias('state.zoom'),
    mapType: Ember.computed.alias('state.mapType'),

    minZoom: Ember.computed.alias('state.minZoom'),
    maxZoom: Ember.computed.alias('state.maxZoom'),
    worldCopyJump: true,
    attributionControl: false,
    zoomControl: false,
    maxBoundsViscosity: 1,

    didInsertElement() {
        this._super(...arguments); 
        // this._layer.addControl(L.control.zoom({ position: 'topright' }));
    },

    _zoomend(leafletEvent) {
        this.set('zoom', leafletEvent.target.getZoom());
    },

    _moveend(leafletEvent) {
        this.setProperties(leafletEvent.target.getCenter());
    }

});
