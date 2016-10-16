import Ember from 'ember';
import PerfectScrollbarMixin from 'ember-cli-scrollbar/mixins/perfect-scrollbar';

export default Ember.Component.extend(PerfectScrollbarMixin, {
    classNames: ['info-panel'],
    classNameBindings: ['open:info-panel--open'],

    perfectScrollbarOptions: {
        suppressScrollX: true,
    },

    open: true,

    updateScrollbar: Ember.observer('open', function() {
        if (this.get('open')) {
            Ember.run.next(() => {
                PerfectScrollbar.initialize(this.element, this.perfectScrollbarOptions);
            });
        } else {
            PerfectScrollbar.destroy(this.element);
        }
    })
});
