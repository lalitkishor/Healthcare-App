import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.resource('home', function() {
      this.route('new-patient');
      this.route('edit',{path:'edit/:home_id'});
    });

  this.route('patient-table');
});

export default Router;
