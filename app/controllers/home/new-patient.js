import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        addInfo:function(){
            var name = this.get('name');
            var address = this.get('address');
            var date = this.get('date');
            var fees = this.get('fees');
            var payment = this.get('payed');
            var newPatient = this.store.createRecord('home',{
                name:name,
                date:new Date(date),
                address:address,
                fees:fees,
                payment:payment
            });
            newPatient.save();
            this.setProperties({
                name:'',
                address:'',
                date:'',
                fees:''
            });
        }
    }
});
