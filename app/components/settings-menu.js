import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'ul',
  classNames: ['settings-menu'],

  settings: Ember.inject.service('map-state'),

  didRender() {
    $(this.element).show('fast');
  },

  click(event) {
    event.stopPropagation();
  },

  actions: {

    setMapType(type) {
      this.set('settings.mapType', type);
    }

  }

});
