const base = require('./index');
const reactConfig = structuredClone(base);
reactConfig.extends = base.extends.flatMap((config) => {
  if (config === 'airbnb-base') {
    return ['airbnb', 'airbnb/hooks'];
  }
  if (config === 'airbnb-typescript/base') {
    return 'airbnb-typescript';
  }
  return config;
});
return reactConfig;
