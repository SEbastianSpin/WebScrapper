const rp = require('request-promise');
const url = 'https://es.wikiquote.org/wiki/Sim%C3%B3n_Bol%C3%ADvar';
const cheerio = require('cheerio')
const $ = cheerio.load('<body>')


rp(url)
  .then(function(html){
    //success!
    let q=$('h2 ~ul  li', html).text();
    console.log(q.match(/«(.*?)»/g));
    // for (const key in q) {
    //     let un=(q[key]);
    //     console.log(un)
    //     //console.log(q.match('/«(.*)»/'));
    // }
   
    //console.log(filtered);
   
    console.log($('h2 ~ul  li', html).length);
    //console.log($('h2 ~ul  li', html).text());
    console.log("done");
  })
  .catch(function(err){
    console.log(err);
  });


  
// rp(url)
// .then(function(html){
//   //success!
//   let q=$('h2 ~ul  li', html).text();

//   let filtered=[...q.match('/«(.*)»/')];
 
//   console.log(filtered);
//   console.log(q);
//   console.log($('h2 ~ul  li', html).length);
//   //console.log($('h2 ~ul  li', html).text());
//   console.log("done");
// })
// .catch(function(err){
//   console.log(err);
// });