// make asynchronous HTTP request

/** Browsers provide an XMLHttpRequest object which can be used to make asynchronous HTTP 
 * requests from JavaScript by passing the 3rd parameter as true.
 */ 

function httpGetAsync(theUrl, callback) {
  var xmlHttpReq = new XMLHttpRequest();
  xmlHttpReq.onreadystatechange = function () {
    if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200)
      callback(xmlHttpReq.responseText);
  };
  xmlHttp.open("GET", theUrl, true); // true for asynchronous
  xmlHttp.send(null);
}


// make synchronous HTTP request

// Browsers provide an XMLHttpRequest object which can be used to make synchronous HTTP requests from JavaScript

function httpGet(theUrl) {
  var xmlHttpReq = new XMLHttpRequest();
  xmlHttpReq.open("GET", theUrl, false); // false for synchronous request
  xmlHttpReq.send(null);
  return xmlHttpReq.responseText;
}