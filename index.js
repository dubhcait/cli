
module.exports = () => {
    const [, , ...args] = process.argv

    switch (args[0]) {
        case '--v' || '--version':
            require('./cmd/version')(args);
            break;
        case '--h' || '--help':
            require('./cmd/help')(args);
            break;
        default:
            console.error(`"${args}" is not a valid flag for hub-ext.`);
            break;
    }

}