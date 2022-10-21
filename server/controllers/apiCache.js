/**
 * @file Middleware for caching API responses
 * @method get grabs previously cached data if exists
 * @method set adds to cache
 * default time in cache is 5s
 */

const fetch = require("node-fetch");
const NodeCache = require("node-cache");

const cache = new NodeCache({ stdTTL: 5 });

const apiCache = {};

apiCache.get = (key) => {
  if (cache.has(key)) return cache.get(key);
  else return false;
}

apiCache.set = (key, data) => {
  cache.set(key, data);
}

module.exports = apiCache;