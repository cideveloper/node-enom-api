var querystring = require('querystring'),
    request = require('request'),
    xml2js  = require('xml2js'),
    merge  = require('merge'),
    parser  = new xml2js.Parser(),
    API_URL = "https://reseller.enom.com/interface.asp?"
    API_URL_TESTING = "https://resellertest.enom.com/interface.asp?"

function Enom(options, proxy) {

  if (!(this instanceof Enom)) return new Enom(options, proxy);
  this.options = options;
  if (proxy) this.proxy = proxy;

}

Enom.prototype.get = function(command, params, callback) {

  var url = (this.options.mode == "testing") ? API_URL_TESTING : API_URL;
  var querystringValues = merge(this.options, params);
  var _this = this;
  url += "command=" + command + "&";
  url += "responsetype=xml&";
  url += querystring.stringify(querystringValues);
  var reqOptions = {
    url: url,
    headers: {
      'User-Agent': 'node.js'
    }
  };
  if (this.proxy) {
    reqOptions.proxy = this.proxy;
  }
  request(reqOptions, function (error, response, body) {

    if (error) {return callback(error);}

    if (_this.options.response == "json") {
      parser.parseString(body, function (err, result) {
        if (error) {return callback(error);}
        return callback(null, result);
      });
    } else {
      return callback(null, body);
    }


  });

};

module.exports = Enom;
