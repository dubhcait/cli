
module.exports = () => {
    const [, , ...args] = process.argv

    switch (args[0]) {
        case '--v':
        case '--version':
            require('./cmd/version')(args);
            break;
        case '--h':
        case '--help':
            require('./cmd/help')(args);
            break;
        case '--i':
        case '--issue':
            require('./cmd/issues')(args[1]);
            break;
        default:
            console.error(`"${args}" is not a valid flag for hub-ext.`);
            break;
    }

}