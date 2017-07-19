/*eslint no-console: off */

export function initialize(appInstance) {
  console.log('hello-instance initializer 2');

  let config = appInstance.resolveRegistration('config:environment');
  console.log('modulePrefix', config.modulePrefix);
}

export default {
  name: 'hello-instance',
  initialize: initialize
};
