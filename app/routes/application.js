import Ember from 'ember';

const DEFAULT_INFO_PANEL_TITLE = "Vessels";

export default Ember.Route.extend({

  actions: {

    setInfoPanelTitle(title) {
      this.controller.set('infoPanelTitle', title || DEFAULT_INFO_PANEL_TITLE);
    }

  }

});
