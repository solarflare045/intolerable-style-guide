const base = require('./index.js');

function deepClone(objectToClone) {
  if (typeof structuredClone === 'function') {
    return structuredClone(objectToClone); // only comes in on node 17, but is better
  }
  return JSON.parse(JSON.stringify(objectToClone));
}

const reactConfig = deepClone(base); // deep clone the base config, as we modify it to extend it
reactConfig.extends = base.extends.flatMap((config) => {
  // change the base configs to their react counterparts
  if (config === 'airbnb-base') {
    return ['airbnb', 'airbnb/hooks'];
  }
  if (config === 'airbnb-typescript/base') {
    return 'airbnb-typescript';
  }
  return config;
});

module.exports = reactConfig;
