import Ember from 'ember';
import $ from 'jquery';

const POSITION = {
  LEFT: 'left',
  RIGHT: 'right'
}

export default Ember.Component.extend({
  tagName: 'button',
  classNames: ['top-bar-button'],
  classNameBindings: ['isLeft:top-bar-button--left', 'isRight:top-bar-button--right'],

  position: POSITION.LEFT,
  title: '',
  icon: '',

  isContentVisible: false,

  isLeft: Ember.computed({
    get() {
      return this.get('position') === POSITION.LEFT;
    }
  }),

  isRight: Ember.computed({
    get() {
      return this.get('position') === POSITION.RIGHT;
    }
  }),

  didInsertElement() {
    $(document).on('click', this._documentClickHandler.bind(this));
  },

  willRemoveElement() {
    $(document).off('click', this._documentClickHandler.bind(this));
  },

  _documentClickHandler(event) {
    let isChild = $.contains(this.element, event.target);
    if (!isChild && this.get('isContentVisible')) { 
      this.set('isContentVisible', false);
    }
  },

  click() {
    Ember.run.later(() => {
      this.send('click');
    }, 0);
  },

  actions: {

    click() {
      this.toggleProperty('isContentVisible');
    }

  }


});
