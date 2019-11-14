/* 
 * This renames the global variable used by the
 * webpack build to initialize the react application.
 * If you don't change this you cannot run two 
 * create-react-app applications in the same page
 * because they both use the same variable namespace.
 */
module.exports = {
  webpack: {
    configure: {
      output: {
        jsonpFunction: 'flybaseCytoscape'
      }        
    }
  }
};
