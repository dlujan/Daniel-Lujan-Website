const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

    eleventyConfig.setBrowserSyncConfig({
        files: './public/css/**/*.css'
    });

    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/js');

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
    });

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}
