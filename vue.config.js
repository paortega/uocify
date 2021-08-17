// const path = require('path');

const cors = require('cors');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_variables.scss";`
      }
    }
  }
};