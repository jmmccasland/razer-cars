import DS from 'ember-data';
import config from 'razer-cars/config/environment';

// this adapter connects to an API
export default DS.JSONAPIAdapter.extend({
  host: config.DS.host,
  namespace: config.DS.namespace,
});
