import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model(params) {
    var key = config.myApiKey;
    console.log(params.legislator_id);
    var url = 'https://congress.api.sunlightfoundation.com/legislators?apikey='+key+'&bioguide_id='+params.legislator_id+'&all_legislators=true';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(responseJSON.results[0]);
      return responseJSON.results[0];
    });
  },
});
