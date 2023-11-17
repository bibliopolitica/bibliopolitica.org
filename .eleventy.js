const cleancss = require('clean-css');
const htmlmin = require('html-minifier');
const moment = require('moment');
const markdownIt = require("markdown-it");

moment.locale('en');

module.exports = function(eleventyConfig) {
  
  // minify css filter
  eleventyConfig.addFilter('cssmin', function(code) {
    return new cleancss({}).minify(code).styles;
  });

  // minify html transform 
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if( this.outputPath && this.outputPath.endsWith(".html") ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        preserveLineBreaks: true
      });
      return minified;
    }
    return content;
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

  eleventyConfig.addPairedShortcode("markdown", (content) => {
    return md.render(content);
  });

  // limit filter
  eleventyConfig.addFilter("limit", function (arr, limit) {
    return arr.slice(0, limit);
  });

  // layout aliases 
  eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');

  // passthrough copy
  eleventyConfig.addPassthroughCopy('site/assets/')
  .addPassthroughCopy('site/images/')
  .addPassthroughCopy('favicon.png');

  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: 'site',
      output: 'dist',
    },
  };
};