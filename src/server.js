const http = require('http')
const app = require('./app')
const PORT = process.env.APP_PORT || 3002

const server = http.createServer(app)

server.listen(PORT, '127.0.0.1', () => {
    console.log(`Server running on 127.0.0.1:${PORT}`);
})