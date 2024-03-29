import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('vessel');
  },

  setupController(controller, model) {
    this._super(controller, model);
    this.send('setInfoPanelTitle', "Vessels");
  }

});
