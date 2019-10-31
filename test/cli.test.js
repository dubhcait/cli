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
  '      help, h ............... show help menu for a command'
 ]);
  });
});

describe('The test hub-ext CLI', () => {
  it('should print the correct output', async () => {
    const response = await cmd.execute(
      './bin/hub-ext',
      ['--v']
    ); 
    expect(response).to.equal(
      'This is version 1.0.0 of this hub-ext.\n'
     
    );
  });
});


// describe('The test CLI', () => {
//   it('should print the correct error', async () => {
//     try {
//       await cmd.execute('./bin/cli', ['--sausage']);
//     } catch(err) {
//       expect(err.trim()).to.equal(
//         '  Invalid option --sausage'
//       );
//     }
//   });
// });
