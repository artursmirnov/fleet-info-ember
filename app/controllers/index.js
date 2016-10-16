import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

    selectVessel(vessel) {
      this.transitionToRoute('vessel', vessel);
    }

  }
});
