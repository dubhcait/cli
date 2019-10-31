const menus = {
    main: `
      hub-ext --[command] <options>
      version, v ............ show package version
      help, h ............... show help menu for a command
   `,
  

  };
  
  module.exports = args => {
    const subCmd = args[0] === 'help' ? args[1] : args[0];
  
    console.log(menus[subCmd] || menus.main);
  };