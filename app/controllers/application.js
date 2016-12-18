import Ember from 'ember';

const PANEL_ICON = {
  OPENED: "close",
  CLOSED: "menu"
};

export default Ember.Controller.extend({

  infoPanelOpen: true,

  infoPanelTitle: "Vessels",

  infoPanelIcon: Ember.computed('infoPanelOpen', {
    get() {
      return this.get('infoPanelOpen') ? PANEL_ICON.OPENED : PANEL_ICON.CLOSED;
    }
  }),

  actions: {

    toggleInfoPanel() {
      this.toggleProperty('infoPanelOpen');
    }

  }

});
