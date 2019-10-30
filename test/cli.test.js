// CLI test: Take 1
const expect = require('chai').expect;
const cmd = require('./cmd');
const { EOL } = require('os');

describe('The test CLI', () => {
  it('should print the correct output', async () => {
    const response = await cmd.execute(
      './bin/cli',
      ['--flags']
    ); 
    expect(response).to.equal(
      'Testing a cli tool, args = --flags\n'
    );
  });
});