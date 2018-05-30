let mongoose = require('mongoose');

const env = process.env.NODE_ENV || 'dev';
let dbName, url;
let port = 8030;

if (env === 'dev') {
  dbName = 'oauth20';
  url = 'mongodb://localhost:27017';
  port = 8030;
} else if (env === 'test') {
  dbName = 'oauth20';
  url = 'mongodb://localhost:27017';
  port = 8031
} else if (env === 'production') {
  dbName = 'oauth20';
  url = 'mongodb://localhost:27017';
  port = 8030;
  // dbName = 'node-mongo-tutorial-app';
  // url = 'mongodb://kamrade:kamrade123@ds127589.mlab.com:27589';
  // port = process.env.PORT || 3200;
} else {
  dbName = 'oauth20';
  url = 'mongodb://localhost:27017';
  port = process.env.PORT || 8030;
}

mongoose.Promise = global.Promise;
mongoose.connect(`${url}/${dbName}`)
  .then(() => console.log(':: connected to mongodb'))
  .catch(e => console.log(':: error', e.message));

module.exports = {
  mongoose,
  port
};
