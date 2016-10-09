import Ember from 'ember';

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

  isLeft: Ember.computed({
    get() {
      return this.get('position') === POSITION.LEFT;
    }
  }),

  isRight: Ember.computed({
    get() {
      return this.get('position') === POSITION.RIGHT;
    }
  })
});
