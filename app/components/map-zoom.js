import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['map-zoom'],

  mapState: Ember.inject.service('map-state'),

  isMax: Ember.computed('mapState.zoom', {
    get() {
      return this.get('mapState.zoom') === this.get('mapState.maxZoom');
    }
  }),

  isMin: Ember.computed('mapState.zoom', {
    get() {
      return this.get('mapState.zoom') === this.get('mapState.minZoom');
    }
  }),

  actions: {

    zoomIn() {
      if (!this.get('isMax')) {
        this.incrementProperty('mapState.zoom');
      }
    },

    zoomOut() {
      if (!this.get('isMin')) {
        this.decrementProperty('mapState.zoom');
      }
    }

  }
});
