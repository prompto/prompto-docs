const fs = require("fs");

// patch webconfig from create react app to disable HotModuleReplacementPlugin which is not worker aware
const bogus_line = "isEnvDevelopment && new webpack.HotModuleReplacementPlugin()";
const fixed_line = "false && new webpack.HotModuleReplacementPlugin()";
const file = "node_modules/react-scripts/config/webpack.config.js";
const config = fs.readFileSync(file, "utf8");
const idx = config.indexOf(bogus_line);
if(idx>0) {
    const patched = config.replace(bogus_line, fixed_line);
    fs.writeFileSync(file, patched, "utf8");
}

// run start script
require('react-scripts/scripts/start');
