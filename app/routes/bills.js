import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model(){
    var key = config.myApiKey;
    var url = 'https://congress.api.sunlightfoundation.com/bills?history.active=true&order=last_action_at&per_page=50&apikey='+key;
    var committeesUrl = 'https://congress.api.sunlightfoundation.com/bills?history.active=true&fields=committees&order=last_action_at&per_page=50&apikey='+key;
    var bills = [];
    return Ember.$.getJSON(url).then(function(billResponse) {
      return Ember.$.getJSON(committeesUrl).then(function(committeeResponse) {
        for (var i = 0; i < billResponse.results.length; i++) {
          var bill = billResponse.results[i];
          bill.committees = committeeResponse.results[i].committees;

          bills[i] = bill;
        }
        console.log(bills);
        return bills;
      });
    });
  },
});
