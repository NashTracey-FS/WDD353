//fixed fs variable
//fixed http variable
const fs  = require('fs');
var http = require('http');

//fixed variable
var myName = "Here is my IP address";

//fixed function name
async function callHttpbin() {
    //removed unused reject
  let promise = new Promise((resolve) => {
    http.get(
     'http://httpbin.org/ip',
     function(response) {
      var str="";
      response.setEncoding('utf8');
      response.on('data', function(data){
      str += data;
     });
     response.on('end', function() {
      //removed var 
      let result = JSON.parse(str);
      let myips = result.origin;
      resolve(myips)//added variable in function
     });
     }
    );
});}//closed bracket
//made async
function executeAsyncTask(){
 
  const valueA = await callHttpbin();
  myIp= valueA.resolve();
  //removed console logs and valueB 
  console.log(myName+" "+myIp);
}//closed bracket
// Output Here is my IP address 172.58.6.258