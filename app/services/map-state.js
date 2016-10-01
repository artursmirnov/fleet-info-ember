import Ember from 'ember';

const MAP_TYPES = {
    SATELLITE: "satellite",
    ROADMAP: "roadmap",
    HYBRID: "hybrid",
    TERRAIN: "terrain"
};

export { MAP_TYPES };

export default Ember.Service.extend({
    lat: 0,
    lon: 0,
    zoom: 2,

    _mapType: MAP_TYPES.TERRAIN,
    mapType: Ember.computed({
        get() {
            return this._mapType;
        },
        set(key, value) {
            Ember.assert(`Invalid Map Type: ${value}`, typeof value === "string" && MAP_TYPES[value.toUpperCase()]);
            this._mapType = value.toLowerCase();
            return this._mapType;
        }
    })
});
