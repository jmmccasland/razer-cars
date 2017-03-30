import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateCar() {
      const car = this.model;

      car.save().then(() => {
        this.transitionToRoute('brand.car.index');
      });
    },
  },
});
