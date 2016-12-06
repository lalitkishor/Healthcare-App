import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteInfo: function(id) {
      this.store.findRecord('home', id).then(function(home) {
        home.deleteRecord();
        home.save();
      });
    }
  }
});
