import Ember from 'ember';

export default Ember.Component.extend({
  fullTitle: Ember.computed('legislator.first_name', 'legislator.last_name', 'legistlator.title', 'legislator.party', 'legislator.state_name', function(){
    return this.get('legislator.title')+'. '+ this.get('legislator.first_name') + ' ' + this.get('legislator.last_name')+', '+ this.get('legislator.party')+' '+this.get('legislator.state_name');
  })
});
