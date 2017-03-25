import Ember from 'ember';
import config from 'razer-cars/config/environment';

export default Ember.Route.extend({
  model(params) {
  // Request part of the URL from 'project.detail' route
  const id = this.paramsFor('brands.car').id;

  return fetch(`${config.apiUrl}/brands/${id}`)
    .then(r => r.json());
}
});
