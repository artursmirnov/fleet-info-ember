import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['info-panel'],
    classNameBindings: ['open:info-panel--open'],

    open: true
});
