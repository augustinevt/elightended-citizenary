import Ember from 'ember';

export function partyColor(params/*, hash*/) {
  var party = params[0];
  if (party === 'D') {
    return 'dem';
  } else if (party === 'R') {
    return 'repub';
  } else {
    return '';
  }
}

export default Ember.Helper.helper(partyColor);
