const request = require("request");

request('http://www.cccc.com.tw', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body)
    } else {
        console.log('aaa='+error)
        console.log(response.statusCode)
        console.log(body)
    }
})