/** HERE YOU CAN ADD ALL YOUR ENVIRONMENT VARIABLES */
const DEBUG = process.env.DEBUG || false;
if (DEBUG) {
    console.log('DEBUG ENABLED');
}

const PORT = process.env.PORT || 3000;

// Make sure to add your env variables to this object so that they are exported to the rest of the application
const env = {
    port: PORT,
    debug: DEBUG
};

export default env;
