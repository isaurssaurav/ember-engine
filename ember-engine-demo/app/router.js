import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.mount('ember-engine-one', { as: 'hate' });
  this.mount('ember-engine-two', { as: 'love' });

});

export default Router;
