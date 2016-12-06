import Model from 'ember-pouch/model';
import DS from 'ember-data';

const {
  attr,
  hasMany,
  belongsTo
} = DS;

export default Model.extend({
  name:DS.attr('string'),
  address:DS.attr('string'),
  fees:DS.attr('string'),
  date:DS.attr('date')
});
