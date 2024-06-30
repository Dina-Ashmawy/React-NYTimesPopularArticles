// cypress/plugins/index.cjs
module.exports = (on, config) => {
    // Add plugins or configuration here if needed
    const webpack = require('@cypress/webpack-preprocessor');

    on('file:preprocessor', webpack());

    config.env.apiUrl = 'https://api.example.com';

    on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'chrome') {
            launchOptions.args.push('--disable-web-security');
            return launchOptions;
        }
    });

    // Return the updated config object
    return config;
};
