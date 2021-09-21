var xhr = new XMLHttpRequest();

// What to do if connection is sucessful 
xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        console.log('It works');
    }
}
// Specify how and where to connect
xhr.open('GET', './connect2.js');

// Send off the request and wait for the response to excute 
// the contents of onreadystatechange
xhr.send()