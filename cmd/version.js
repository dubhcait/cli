const { version, name } = require('../package.json');

module.exports = args => {
  console.log(`This is version ${version} of this ${name}.`);
};