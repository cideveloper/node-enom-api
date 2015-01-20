# node-enom-api

This is a simple library to interface with the ENOM API.

## Installation

``` shell
npm install node-enom-api --save
```

## Configuration

You will need an ENOM reseller account in order to use the functionality of this module. You can become an ENOM reseller [here](http://www.enom.com/resellers/benefits-pricingplans.aspx).

````javascript
var Enom = require('../node-enom-api');

var client = new Enom({
  uid: "resellid",
  pw: "resellpw",
  response: "xml",
  mode: "testing"
});
````

| Option  | Required | Description | Default |
| ------------- | ------------- | ------------- | ------------- |
| uid  | true  | ENOM reseller username | null  |
| pw  | true  | ENOM reseller password | null  |
| response  | false  | *xml* or *json* | xml  |
| mode  | false | *live* or *testing* | live  |

## Usage
**See Configuration section above for *client* config**

````javascript
client.get('check', {sld: "unusualTVname", tld: "tv"}, function(error, data){
  if (error) {
    console.log(error);
  };
  console.log(data);
});
````