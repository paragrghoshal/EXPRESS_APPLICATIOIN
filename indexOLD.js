const http = require('http');
const fs = require('fs');

const data = fs.readFileSync(`${__dirname}/dev_data/site_list.json`, 'utf-8');
const dataObject = JSON.parse(data);

const server = http.createServer((req, res) => {
    console.log(req.url);
    const pathName = req.url;
    if (pathName == '/' || pathName == '/product') {
        res.end("Hello from server. : PRODUCT");
    } else if (pathName == '/api') {
        const productData = JSON.parse(data);
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.end(data);
        // res.end("<href>https://www.youtube.com/watch?v=Oe421EPjeBE</href>");
    }




});
server.listen('8000', '127.0.0.1', () => {
    console.log("Listning port 8000");
});