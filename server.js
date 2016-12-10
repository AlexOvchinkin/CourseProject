/**
 * Created by Alex on 10.12.2016.
 */

let http = require('http');
let nodeStatic = require('node-static');
let file = new nodeStatic.Server('.');

http.createServer(function(req, res) {
    file.serve(req, res);
}).listen(8080);

console.log('Server running on port 8080');