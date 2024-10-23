const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url == '/'){
        res.end('Welcome to our home page')
    }
    if(req.url == '/about'){
        res.end('Here is our short history')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We cannot find the page you have requested for</p>
        <a href="/">back home</a>
    `)
})
server.listen(5000)
//req is the incoming request from the client
//res is the response we are sending back