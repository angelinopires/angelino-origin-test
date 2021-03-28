const path = require('path');
const cwd = process.cwd();

module.exports = {
    data: '@import "src/styles/styles.scss";',
    includePaths: [
        path.resolve(cwd, 'node_modules')
    ]
};
