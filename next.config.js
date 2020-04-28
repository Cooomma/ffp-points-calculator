const webpack = require("webpack");
const isProd = (process.env.NODE_ENV || "production") === "production";

module.exports = {
    exportPathMap: () => ({
        "/": { page: "/" },
    }),
    assetPrefix: isProd ? "/ffp-points-calculator" : "",
    webpack: (config, { dev }) => {
        config.module.rules = config.module.rules.map((rule) => {
            if (rule.loader === "babel-loader") {
                rule.options.cacheDirectory = false;
            }
            return rule;
        });
        return config;
    },
};
