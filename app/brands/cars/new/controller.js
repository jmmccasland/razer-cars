import Ember from 'ember';

export default Ember.Controller.extend({
  formValues: {},

  actions: {
    saveCar() {
      const car = this.store.createRecord('car', this.formValues);

      car.save().then(() => {
        this.set('formValues', {});
        this.transitionToRoute('brands.cars.index');
      });
    },
  },
});
