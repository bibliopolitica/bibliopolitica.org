const cleancss          = require('clean-css')
const moment            = require('moment')
const markdownIt        = require("markdown-it")
const markdownItAnchor  = require("markdown-it-anchor")

moment.locale('en')

module.exports = function(eleventyConfig) {
  
  // minify css filter
  eleventyConfig.addFilter('cssmin', function(code) {
    return new cleancss({}).minify(code).styles;
  })

  // date format filters
  eleventyConfig.addFilter('dateFormatMonth', date => {
    return moment(date).utc().format('MMMM YYYY');
  })

  eleventyConfig.addFilter('dateFormatYear', date => {
    return moment(date).utc().format('YYYY');
  })

  eleventyConfig.addFilter('dateFormat', date => {
    return moment(date).utc().format('LL');
  })

  // limit filter
  eleventyConfig.addFilter('limit', function (arr, limit) {
    return arr.slice(0, limit);
  })

  // inspect objects as JSON
  eleventyConfig.addFilter('jsonify', (data) => {
    return JSON.stringify(data, null, "\t")
  })  

  const markdownItOptions = {
    html: true,
  }

  // Options for the `markdown-it-anchor` library
  const markdownItAnchorOptions = {
    permalink: markdownItAnchor.permalink.linkInsideHeader({
      symbol: `#`,
      class: 'not-prose header-anchor',
      placement: 'after'
    })
  }

  const markdownLib = markdownIt(markdownItOptions).use(
    markdownItAnchor,
    markdownItAnchorOptions
  )

  eleventyConfig.setLibrary("md", markdownLib)  

  // layout aliases 
  eleventyConfig.addLayoutAlias('base', 'layouts/base.html')
  eleventyConfig.addLayoutAlias('exhibit', 'layouts/exhibit.html')
  eleventyConfig.addLayoutAlias('item', 'layouts/item.html')
  eleventyConfig.addLayoutAlias('page', 'layouts/page.html')

  // passthrough copy
  eleventyConfig.addPassthroughCopy('site/assets/')
                .addPassthroughCopy('site/media/')
                .addPassthroughCopy({
                  './node_modules/siema/dist/siema.min.js': '/assets/vendor/siema.min.js'
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
                })  

  return {
    markdownTemplateEngine: 'liquid',
    dir: {
      input: 'site',
      output: 'dist',
    },
  }
}