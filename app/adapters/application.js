import { Adapter } from 'ember-pouch';
import PouchDB from 'pouchdb';
import config from 'intern-project/config/environment';
import Ember from 'ember';

const { assert, isEmpty } = Ember;

PouchDB.debug.enable('*');

var remote = new PouchDB('http://localhost:5984/offline');
var db = new PouchDB('Patient');
 console.log("Error h tu"+remote);
db.sync(remote, {
   live: true,   // do a live, ongoing sync
   retry: false   // retry if the conection is lost

});

export default Adapter.extend({
  db: db
});
