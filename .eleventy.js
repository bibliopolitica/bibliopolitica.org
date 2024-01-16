const cleancss = require('clean-css');
const moment = require('moment');
const markdownIt = require('markdown-it');

moment.locale('en');

module.exports = function(eleventyConfig) {
  
  // minify css filter
  eleventyConfig.addFilter('cssmin', function(code) {
    return new cleancss({}).minify(code).styles;
  });

  // date format filters
  eleventyConfig.addFilter('dateFormatMonth', date => {
    return moment(date).utc().format('MMMM YYYY');
  });

  eleventyConfig.addFilter('dateFormatYear', date => {
    return moment(date).utc().format('YYYY');
  });

  eleventyConfig.addFilter('dateFormat', date => {
    return moment(date).utc().format('LL');
  });

  // markdown
  const md = new markdownIt({
    html: true
  });

  eleventyConfig.addPairedShortcode('markdown', (content) => {
    return md.render(content);
  });

  // limit filter
  eleventyConfig.addFilter('limit', function (arr, limit) {
    return arr.slice(0, limit);
  });

  // layout aliases 
  eleventyConfig.addLayoutAlias('base', 'layouts/base.liquid');

  // passthrough copy
  eleventyConfig.addPassthroughCopy('site/assets/')
                .addPassthroughCopy({
                  './node_modules/leaflet/dist/leaflet.js': '/assets/vendor/leaflet.js'
                })
                .addPassthroughCopy({
                  './node_modules/leaflet-iiif/leaflet-iiif.js': '/assets/vendor/leaflet-iiif.js'
                })
                .addPassthroughCopy({
                  './node_modules/leaflet-sleep/Leaflet.Sleep.js': '/assets/vendor/leaflet-sleep.js'
                })
                .addPassthroughCopy({
                  './node_modules/leaflet/dist/leaflet.css': '/assets/vendor/leaflet.css'
                })
                .addPassthroughCopy({
                  './node_modules/leaflet.fullscreen/Control.FullScreen.js': '/assets/vendor/leaflet-fullscreen.js'
                })
                .addPassthroughCopy({
                  './node_modules/leaflet.fullscreen/Control.FullScreen.css': '/assets/vendor/leaflet-fullscreen.css'
                })
                .addPassthroughCopy({
                  './node_modules/leaflet.fullscreen/icon-fullscreen.svg': '/assets/vendor/icon-fullscreen.svg'
                });  

  return {
    markdownTemplateEngine: 'liquid',
    dir: {
      input: 'site',
      output: 'dist',
    },
  };
};