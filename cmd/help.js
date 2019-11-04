const menus = {
    main: `
      hub-ext --[command] <options>
      version, v ............ show package version
      help, h ............... show help menu for a command
      issue, i ... generates issues from relvant csv with appropriate template
   `,
  
   issue: `
   hub-ext --issue <options>
   epics.........generates issues from epics.csv with epic template
   features......generates issues from features.csv with feature template
   bugs..........generates issues from bugs.csv with bug template`

  };
  
  module.exports = args => {
    const subCmd = args[0] === '--help' || '--h' ? args[1] : args[0];
    console.log(menus[subCmd] || menus.main);
  };