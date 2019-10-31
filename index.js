
module.exports = () => {
    const [, , ...args] = process.argv

    switch (args[0]) {
        case '--v':
            require('./cmd/version')(args);
            break;
        default:
            console.log(`Testing a cli tool, args = ${args}`);
            break;
    }

}