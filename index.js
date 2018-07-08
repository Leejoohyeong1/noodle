var express = require('express');
var cheerio = require('cheerio');
var request = require('request');
var app = express();

app.get('/', function (req, res) {
  request('http://www.samyangfoods.com/kor/brand/ajaxProductList.do?pageIndex=1&pageUnit=1000&searchCateCd1=45&searchCateCd2=49&searchNewUseYn=&seq=&_=1527087084424', function (error, response, body) {
    var $ = cheerio.load(body);
    $('#productList > ul > li').each(function(i, elem) {
      console.log("---------------------------------------------------------"); 
        var url =  $(elem).find('a').attr('onclick'); 
        url = url.replace(/[^0-9]/g,'');


    
        console.log(url);

        console.log($(elem).find('img').attr('src'));
        console.log($(elem).find('div').eq(1).text());
      console.log("---------------------------------------------------------"); 
    });
  });
//http://www.samyangfoods.com/kor/brand/view.do?seq=412
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
