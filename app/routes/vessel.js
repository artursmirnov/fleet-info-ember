import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('vessel', params.vessel_id);
  },

  setupController(controller, model) {
    this._super(controller, model);
    this.send('setInfoPanelTitle', model.get('name'));
  }


});
