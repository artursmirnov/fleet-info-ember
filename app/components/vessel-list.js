import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['vessel-list'],

  vessels: [],

  actions: {

    selectVessel(vessel) {
      this.get('selectVessel')(vessel);
    }

  }

});
