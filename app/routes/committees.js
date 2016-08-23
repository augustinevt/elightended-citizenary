import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model(params) {
    var key = config.myApiKey;
    var url = 'https://congress.api.sunlightfoundation.com/committees?apikey='+key+'&per_page=all';
     return Ember.$.getJSON(url).then(function(responseJSON){
       return responseJSON.results;
     });
  }
});
