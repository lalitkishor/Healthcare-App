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
  fees:DS.attr('number'),
  date:DS.attr('date'),
  payment:DS.attr('boolean'),
});
