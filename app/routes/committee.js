import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model(params) {
    var key = config.myApiKey;
    var subcommitteesUrl = 'https://congress.api.sunlightfoundation.com/committees?parent_committee_id='+params.committee_id+'&apikey='+key;
    var membersUrl = 'https://congress.api.sunlightfoundation.com/committees?committee_id='+params.committee_id+'&fields=members&apikey='+key;
    var committeeUrl = 'https://congress.api.sunlightfoundation.com/committees?committee_id='+params.committee_id+'&apikey='+key;
    return Ember.RSVP.hash({
      committee: Ember.$.getJSON(committeeUrl).then(function(responseJSON) {
        console.log(responseJSON.results[0]);
        return responseJSON.results[0];
      }),
      subcommittees: Ember.$.getJSON(subcommitteesUrl).then(function(responseJSON) {
        return responseJSON.results;
      }),
      legislators: Ember.$.getJSON(membersUrl).then(function(responseJSON) {
        return responseJSON.results[0].members;
      }),
    });
  },
});
