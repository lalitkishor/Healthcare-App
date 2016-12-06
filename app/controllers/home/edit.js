import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        editInfo:function(id){
            var self= this;
            var name = this.get('model.name');
            var address = this.get('model.address');
            var date = this.get('model.date');
            var fees = this.get('model.fees');
            this.store.findRecord('home',id).then(function(){
                home.set('name',name);
                home.set('address',address);
                home.set('date',date);
                home.set('fees',fees);
                home.save();
                self.transitionTo('home');
            });
        }
    }
});
