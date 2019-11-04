// CLI test: Take 1
const expect = require('chai').expect;
const cmd = require('./cmd');
const { EOL } = require('os');

describe('The test hub-ext CLI', () => {
  it('--h should print the correct output', async () => {
    const response = await cmd.execute(
      './bin/hub-ext',
      ['--h']
    ); 
    expect(response.trim().split(EOL)).to.include.members(
 [ 'hub-ext --[command] <options>',
  '      version, v ............ show package version',
  '      help, h ............... show help menu for a command',
  '      issue, i ... generates issues from relvant csv with appropriate template'
 ]);
  });
});

describe('The test hub-ext CLI', () => {
  it('--h issue should print the correct output', async () => {
    const response = await cmd.execute(
      './bin/hub-ext',
      ['--h','issue']
    ); 
    expect(response.trim().split(EOL)).to.include.members(
 [ 'hub-ext --issue <options>',
  '   epics.........generates issues from epics.csv with epic template',
  '   features......generates issues from features.csv with feature template',
  '   bugs..........generates issues from bugs.csv with bug template'
 ]);
  });
});

describe('The test hub-ext CLI', () => {
  it('--v should print the correct output', async () => {
    const response = await cmd.execute(
      './bin/hub-ext',
      ['--v']
    ); 
    expect(response).to.equal(
      'This is version 1.0.0 of this hub-ext.\n'
     
    );
  });
});


describe('The test CLI', () => {
  it('should print the correct error', async () => {
    try {
      await cmd.execute('./bin/hub-ext', ['--sausage']);
    } catch(err) {
      expect(err.trim()).to.equal(
        '"--sausage" is not a valid flag for hub-ext.'
      );
    }
  });
});
