import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.resource('posts', function () {
    this.resource('new-post');
  });
  this.resource('post', { path: ':post_id' }, function() {
    this.resource('new-comment');
  });
});

export default Router;
