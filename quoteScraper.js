const rp = require('request-promise');

const cheerio = require('cheerio')
const $ = cheerio.load('<body>')



const url = process.argv[2];
if(url){
    rp(url)
    .then(function(html){
      //success!
      let q=$('h2 ~ul  li', html).text();
      let quotes=q.match(/«(.*?)»/g);
      console.log(quotes);
    })
    .catch(function(err){
      console.log(err);
    });
  
}
else console.log("No url given node quoteScrapper.js <<url>>");



  
