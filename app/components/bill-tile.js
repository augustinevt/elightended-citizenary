import Ember from 'ember';

export default Ember.Component.extend({
  expanded: false,
  actions: {
    toggleBill(){
      if(!this.get('expanded')){
        this.set('expanded', true);
      }else{
        this.set('expanded', false);
      }
    },
  }
});
